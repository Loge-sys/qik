import { useEffect, useState } from "react";
import { Container, Foods, FoodsContainer } from './styles';
import axios from 'axios';
import { BASE_URL } from '../../../config/config';
import { Section } from "./interface";
import { useSelector } from 'react-redux';
import { useConfig } from '../../redux/Config/sliceConfig';
import DropDownItem from "../DropDownItem";
import menuMockToError from '../../../config/mocks/menuMockToError.json';

const Menu = () => {
    const [foods, setFoods] = useState<Section[]>([]);
    const config = useSelector(useConfig);
    const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);

    useEffect(() => {
        loadConfig();
    }, []);

    const loadConfig = async () => {
        try {
            const res = await axios.get<{ sections: Section[] }>(`${BASE_URL}/menu`);
            const sections = res.data.sections;
            if (Array.isArray(sections)) {
                setFoods(sections);
                const index = sections.indexOf(sections.find((item) => item === menuMockToError.sections[0])!);
                setSelectedItemIndex(index);
            } else {
                throw new Error("Invalid data format");
            }
        } catch (error) {
            console.error(error);
            const sections = menuMockToError.sections as Section[];
            setFoods(sections);
            const index = sections.indexOf(sections.find((item) => item === menuMockToError.sections[0])!);
            setSelectedItemIndex(index);
        }
    };

    const handleClickFood = (index: number) => {
        setSelectedItemIndex(index);
    };

    const renderFoods = () => {
        return foods.map((food, index) => (
            <Foods 
                key={index} 
                image={food.images[0]?.image || ''} 
                name={food.name} 
                color={config[0]?.primaryColour} 
                click={() => handleClickFood(index)} 
                selected={index === selectedItemIndex} 
            />
        ));
    };

    return (
        <Container>
            <FoodsContainer>
                {renderFoods()} 
            </FoodsContainer>
            <DropDownItem foods={foods} selectedItemIndex={selectedItemIndex} />
        </Container>
    );
}

export default Menu;
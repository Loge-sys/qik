import { useEffect, useState } from "react";
import { Container, Foods, FoodsContainer } from './styles'
import axios from 'axios';
import { BASE_URL } from '../../../config/config'
import { Food } from "./interface";
import { useSelector } from 'react-redux'
import { useConfig } from '../../redux/sliceConfig'
import DropDownItem from "../DropDownItem";

const Menu = () => {
    const [foods, setFoods] = useState<Food[]>([])
    const config = useSelector(useConfig)
    useEffect(() => {
        loadConfig()
    }, [])

    const loadConfig = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/menu`)
            setFoods(res?.data?.sections)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClickFood = (event: object) => {
        console.log(event)
    }

    const renderFoods = () => {
        return foods.map((food, index) => (
            <Foods key={index} image={food.images[0].image} name={food.name} color={config[0]?.primaryColour} click={() => handleClickFood(food)} />
        ));
    }

    return (
        <Container>
            <FoodsContainer>
                {renderFoods()} 
            </FoodsContainer>
            <DropDownItem />
        </Container>
    )
}

export default Menu

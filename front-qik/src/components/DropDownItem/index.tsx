// DropDownItem.tsx
import { useState } from 'react';
import { Container, DropDownHeader, Card } from './styles';
import { DropDownItemProps } from './interface';
import Modal from '../Modal';
import { Item } from '../Menu/interface';
import { useBasket } from '../../redux/Basket/sliceBasket';
import { useSelector } from 'react-redux';

const DropDownItem: React.FC<DropDownItemProps> = ({ foods, selectedItemIndex }) => {
    const [show, setShow] = useState(true);
    const [isModalOpen, setModalOpen] = useState(false);
    const [foodDetail, setFoodDetail] = useState<Item | undefined>(undefined);
    const basketList = useSelector(useBasket);

    const handleClick = () => {
        setShow(!show);
    };

    const handleClickItem = (food: Item) => {
        setModalOpen(true);
        setFoodDetail(food);
    };

    const renderFoodCard = () => {
        if (show && foods[selectedItemIndex]) {
            return foods[selectedItemIndex].items.map((food, index) => {
                const itemCountInBasket = basketList.filter(item => item.id === food.id).length;
                return (
                    <Card
                        key={index}
                        image={food?.images?.[0]?.image || ''}
                        title={food.name}
                        description={food?.description}
                        price={food.price}
                        click={() => handleClickItem(food)}
                        itemCountInBasket={itemCountInBasket}
                    />
                );
            });
        }
    };

    return (
        <Container>
            <DropDownHeader click={handleClick} show={show} foods={foods[selectedItemIndex]} />
            {renderFoodCard()}
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} foodDetail={foodDetail} />
        </Container>
    );
};

export default DropDownItem;
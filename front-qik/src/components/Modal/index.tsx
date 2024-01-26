import { useState } from 'react';
import { DetailModal } from './styles';
import { ModalProps } from './interface';
import { useSelector } from 'react-redux';
import { useConfig } from '../../redux/Config/sliceConfig';
import { useDispatch } from "react-redux";
import { addBasket } from '../../redux/Basket/sliceBasket';
import { Size } from '../../redux/Basket/interface';
import { ModifiersItems } from '../Menu/interface';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, foodDetail }) => {
  const config = useSelector(useConfig);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const dispatch = useDispatch();

  if (!isOpen || !foodDetail) return null;
  const image = foodDetail.images && foodDetail.images.length > 0 ? foodDetail.images[0]?.image : '';
  const title = foodDetail.name || '';
  const description = foodDetail.description || '';
  const modifiers = foodDetail.modifiers?.[0] || '';
  const price = foodDetail.price;

  const handleClickItem = (selectedItem: Size | ModifiersItems) => {
    if ('maxChoices' in selectedItem) {
      setSelectedSize(selectedItem);
    } else {
      setSelectedSize(null);
    }
  };

  const handleClickAdd = () => {
    if (selectedSize) {
      const updatedFoodDetail = { ...foodDetail, size: selectedSize };
      dispatch(addBasket(updatedFoodDetail));
      setSelectedSize(null);
    } else {
      dispatch(addBasket(foodDetail));
    }
    onClose();
  };

  return (
    <DetailModal 
      image={image} 
      title={title} 
      description={description} 
      modifiers={modifiers} 
      click={onClose} 
      color={config[0]?.primaryColour} 
      handlesize={handleClickItem} 
      handleadd={handleClickAdd}
      firstprice={price}
      sizeprice={selectedSize?.price}
    />
  );
};

export default Modal;
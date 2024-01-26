import styled from 'styled-components';
import { IconImageProps, FoodContainerProps } from './interface';
import { COLORS } from '../../../config/config';

export const Container = styled.div`
  display: flex;
  width: 69%;
  padding-bottom: 24px;
  flex-direction: column;
  background: #fff;
  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.14);
  @media (max-width: 768px) {
    width: 100%;
    box-shadow: none;
  }
`;

export const FoodsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FoodContainer = styled.div<FoodContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 20px 16px 24px 16px;
  align-items: center;
  gap: 12px;
  margin-right: 12px;
  cursor: pointer;
  border-bottom: ${props => props.selected ? `2px solid ${props.color}` : 'none' };
  margin-left: 10px;

  @media (max-width: 768px) {
    padding: 14px;
    margin-left: 5px;
  }
`;

const IconImage = styled.img<IconImageProps>`
  object-fit: cover;
  display: flex;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  border: ${props => props.selected ? `2px solid ${props.color}` : 'none' };
  padding: 2px;
  overflow: hidden;
`;

export const FoodText = styled.span`
  color: ${COLORS.main};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.5px;
`;


export const Foods = ({ image, name, color, click, selected } : 
  { image: string; name: string, color: string, click: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void, selected: boolean  }) => {
  return (
    <FoodContainer onClick={click} color={color} selected={selected} >
      <IconImage src={image} alt={name} color={color} selected={selected} />
      <FoodText>{name}</FoodText>
    </FoodContainer>
  );
};
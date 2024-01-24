import styled from 'styled-components';
import { IconImageProps } from './interface';

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

const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 24px 16px;
  align-items: center;
  gap: 12px;
  margin-right: 12px;
  cursor: pointer;
`;

const IconImage = styled.img<IconImageProps>`
  object-fit: cover;
  display: flex;
  width: 74px;
  height: 74px;
  border-radius: 50px;
  border: 2px solid ${props => props.color};
  padding: 2px;
  overflow: hidden;
`;

export const FoodText = styled.span`
  color: var(--Copy-Main, #121212);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.5px;
`;


export const Foods = ({ image, name, color, click }: { image: string; name: string, color: string, click: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void  }) => {
  return (
    <FoodContainer onClick={click}>
      <IconImage src={image} alt={name} color={color} />
      <FoodText>{name}</FoodText>
    </FoodContainer>
  );
};
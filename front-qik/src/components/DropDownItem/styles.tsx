import styled from 'styled-components'
import ArrowUp from '../../assets/icons/arrowUp.png'
import { IconArrowUpProps, DropDownHeaderProps } from './interface'
import { IconImageProps } from '../Menu/interface'
import { formatToMoneyBr } from '../../helpers'
import { COLORS } from '../../../config/config'
export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 32px 16px 12px 16px;
    gap: 8px;
`;

const TitleHeader = styled.span`
    color: ${COLORS.main};
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
`;

export const IconArrowUp = styled.img.attrs(() => ({
  src: ArrowUp,
})) <IconArrowUpProps>`
    width: 20px;
    height: 20px;
    transform: ${props => (props.show === 'false' ? 'rotate(180deg)' : 'rotate(0deg)')};
  `;


export const DropDownHeader: React.FC<DropDownHeaderProps> = ({ click, show, foods }) => {
  return (

    <HeaderContainer onClick={click}>
      <TitleHeader>
        {foods && foods.name ? foods.name : 'Nome Indefinido'}
      </TitleHeader>
      <IconArrowUp show={show ? 'true' : 'false'} />
    </HeaderContainer>
  )
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardTitle = styled.span`
  display: flex;
  color: ${COLORS.main};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CardDescription = styled.span`
  color: ${COLORS.secondary};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const CardPrice = styled.span`
  color: ${COLORS.secondary};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.5px;
`;


const IconImage = styled.img<IconImageProps>`
  object-fit: cover;
  display: flex;
  width: 128px;
  height: 85px;
  border-radius: 4px;
  overflow: hidden;
`;

const BadgeCount = styled.div`
  display: none;
  width: 18px;
  height: 18px;
  padding: 1px 2px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #4F372F;
  color: #FFF;
  margin-right: 8px;
  @media (max-width: 768px) {
    display: flex;
  }
`;


export const Card = ({ image, title, description, price, click, itemCountInBasket }:
  { image: string; title: string, description: string, price: number, click: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void, itemCountInBasket: number }) => {

  const renderDescription = () => {
    if (description?.length > 50) {
      return description.substring(0, 50) + '...';
    }
    return description
  }

  const renderBadgeCount = () => {
    if (itemCountInBasket > 0) return <BadgeCount>{itemCountInBasket}</BadgeCount>
  }
  return (
    <ContentContainer onClick={click}>
      <TextContainer>
        <CardTitle>{renderBadgeCount()} {title}</CardTitle>
        <CardDescription>{renderDescription()}</CardDescription>
        <CardPrice>{formatToMoneyBr(price)}</CardPrice>
      </TextContainer>
      {image && <IconImage src={image} alt={title} />}
    </ContentContainer>
  )
}

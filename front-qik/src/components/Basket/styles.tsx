import styled from 'styled-components';
import { Basket } from '../../redux/Basket/interface';
import Quantity from '../Quantity';
import { formatToMoneyBr } from '../../helpers';
import { MaxTotalProps } from './interface';
import IconClose from '../../assets/icons/iconCloseBasket.png'
import { COLORS } from '../../../config/config';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  flex-shrink: 0;
  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.15);
  width: 31%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  background: #fff;
  display: none;
  flex-direction: column;
  z-index: 3;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    max-height: 100%;
    bottom: 0;
  }
`;

export const CheckoutButtonContainer = styled.div`
  display: none;
  flex-direction: column;
  z-index: 3;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: auto;
    max-height: 100%;
    margin-bottom: 20px;
  }
`;

export const TextHeaderMobile = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.75px;
  text-align: center;
  margin-top: 5px;
`;

export const HeaderMobileContainer = styled.div`
  background: #fff;
  display: none;
  flex-direction: column;
  z-index: 3;

  @media (max-width: 768px) {
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-bottom: 1px solid #DADADA;
    margin-bottom: 16px;
  }
`;

export const MobileCloseIcon = styled.img.attrs(() => ({
  src: IconClose,
}))`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 16px;
  top: 16px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;

export const HeaderText = styled.span`
  color: ${COLORS.secondary};
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.5px;
`;

const HeaderContent = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  background: #FFF;
`;

const ContainerItem = styled.div`
  display: flex;
  padding: 8px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background-color: #FFF;
`;

const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const TitleItem = styled.span`
  color: ${COLORS.main};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AdditionalItem = styled.span`
  color: #5F5F5F;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PriceItem = styled.span`
  color: ${COLORS.main};
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.5px;
`;

const ResultContainer = styled.div`
  display: flex;
  padding-top: 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background-color: #F8F9FA;
`;

const TotalContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;


const TotalTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const MinTotal = styled.span`
  color: ${COLORS.main};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
`;

const MaxTotal = styled.span<MaxTotalProps>`
  color: ${COLORS.main};
  font-size: 24px;
  font-style: normal;
  font-weight: ${props => props.bold};
  line-height: normal;
  padding: 16px 0px;
`;


export const BasketContent: React.FC<{ basket: Basket[] }> = ({ basket }) => {

  const calculateTotal = () => {
    return basket.reduce((total, item) => {
      const itemPrice = item?.size ? item?.size?.price : item?.price;
      return total + (itemPrice || 0);
    }, 0);
  };

  const renderBasket = () => {
    if (basket && basket.length > 0) {
      return basket.map((item: Basket, index) => (
        <ContainerItem key={index}>
          <ContainerTitle>
            <TitleItem>{item.name}</TitleItem>
            
            <PriceItem>{item?.size ? formatToMoneyBr(item?.size?.price) : formatToMoneyBr(item?.price)}</PriceItem>
          </ContainerTitle>
          <AdditionalItem>{item?.size && item?.size?.name} {item?.size && `(+${formatToMoneyBr(item?.size?.price)})`}</AdditionalItem>
          <Quantity iconSize={20} numberSize={16} />
        </ContainerItem>
      ));
    }

    return <HeaderContent>Seu carrinho está vazio</HeaderContent>;
  };

  const renderResult = () => {
    if (basket && basket.length > 0) {
      return (
        <ResultContainer>
        <TotalContainer>
          <TotalTextContainer>
            <MinTotal>Sub total</MinTotal>  
            <MinTotal>{formatToMoneyBr(calculateTotal())}</MinTotal>
          </TotalTextContainer>
          <TotalTextContainer>
            <MaxTotal bold={300}>Total</MaxTotal>  
            <MaxTotal bold={700}>{formatToMoneyBr(calculateTotal())}</MaxTotal>
          </TotalTextContainer>
        </TotalContainer>
      </ResultContainer>
      )
    }
  }

  return (
    <>
      {renderBasket()}
      {renderResult()}
    </>
  );
};
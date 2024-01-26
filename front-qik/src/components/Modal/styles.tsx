import { useState } from 'react';
import styled from 'styled-components'
import CloseIcon from '../../assets/icons/iconClose.png'
import { IconImageProps, ModifiersItems } from '../Menu/interface'
import { DetailModalProps, ModalContentProps } from './interface'
import Quantity from '../Quantity'
import PrimaryButton from '../PrimaryButton'
import { formatToMoneyBr } from '../../helpers';
import { COLORS } from '../../../config/config';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;


export const MobileMenuIcon = styled.img.attrs(() => ({
  src: CloseIcon,
}))`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 16px;
`;

export const ModalContent = styled.div<ModalContentProps>`
  background: #fff;
  width: 480px;
  max-height: 720px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  display:flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    width: 100%;
    ${props => props.hasimage === 1 ? 'height: 100%;' : ''};
    ${props => props.hasimage === 1 ? 'max-height: 100%;' : ''};
    position: absolute;
    bottom: 0;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 30px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
`;

const Title = styled.span`
  color: ${COLORS.main};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Description = styled.span`
  color: ${COLORS.secondary};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.5px;
`;

const Image = styled.img<IconImageProps>`
  object-fit: cover;
  display: flex;
  width: 100%;
  height: 320px;
  overflow: hidden;
`;

export const TextContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const ChooseSizeContainer = styled.div`
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: #F8F9FA;
`;

export const ChooseSizeTitle = styled.span`
  color: ${COLORS.secondary};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.5px;
`;

export const ChooseSizeDescription= styled.span`
  color: #5F5F5F;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.5px;
`;

export const ChooseSizeItem = styled.div`
  background: #FFF;
  display: flex;
  height: 72px;
  padding: 16px 24px;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
`;

export const ChooseSizeContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
  align-self: stretch;
`;

export const ChooseSizeItemTitle = styled.span`
  color: ${COLORS.main};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ChooseSizeItemPrice = styled.span`
  color: ${COLORS.secondary};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const RadioInput = styled.input`
  position: relative;
  width: 24px;
  height: 24px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 2px solid ${COLORS.secondary};
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  background-color: transparent;

  &:checked {
    &::before {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px; 
      background-color: ${props => props.color};;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;


export const OrderButtonContainer = styled.div`
  display: flex;
  padding: 8px 24px 24px 24px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #F8F9FA;
`;


export const ContainerNoImage = styled.div`
  display: flex;
  padding: 8px 24px 24px 24px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const DetailModal: React.FC<DetailModalProps> = ({ image, title, description, modifiers, click, color, handlesize, handleadd, firstprice, sizeprice }) => {
      const [selectedItem, setSelectedItem] = useState<ModifiersItems>();

    const renderDescription = () => {
      if (description) return <Description>{description}</Description>
    }

    const verifyDisabled = () => {
      if (modifiers && !selectedItem) return true
      
      return undefined
    }

    const renderModifiers = () => {
      if (modifiers){ 
        return (
          <>
          <ChooseSizeContainer>
            <ChooseSizeTitle>{modifiers.name}</ChooseSizeTitle>
            <ChooseSizeDescription>Select 1 option</ChooseSizeDescription>
          </ChooseSizeContainer>
          {modifiers.items.map((item, index) => (
              <ChooseSizeItem key={index}>
              <ChooseSizeContainerText>
                <ChooseSizeItemTitle>{item.name}</ChooseSizeItemTitle>
                <ChooseSizeItemPrice>{formatToMoneyBr(item.price)}</ChooseSizeItemPrice>
              </ChooseSizeContainerText>
              <RadioInput 
                onChange={() => {
                  handlesize(item)
                  setSelectedItem(item)
                }}
                type='radio'
                color={color} 
                checked={item === selectedItem} 
              />
            </ChooseSizeItem>
          ))}      
          </>
        )
    }
    }

    const renderImage = () => {
      if (image) return <Image src={image} alt={title} />

      return <ContainerNoImage />
    }

    return (
      <ModalOverlay>
        <ModalContent hasimage={image ? 1 : 0}>
          {renderImage()}
          <CloseButton onClick={click}><MobileMenuIcon /></CloseButton>
          <TextContainer>
            <Title>{title}</Title>
            {renderDescription()}
          </TextContainer>
          {renderModifiers()}
          <OrderButtonContainer>
            <Quantity iconSize={32} numberSize={24} />
            <PrimaryButton text={`Add to Order • ${formatToMoneyBr(firstprice + (sizeprice ? sizeprice : 0))}`} handleClick={handleadd} disabled={verifyDisabled()} />
          </OrderButtonContainer>
        </ModalContent>
      </ModalOverlay>
    )
}
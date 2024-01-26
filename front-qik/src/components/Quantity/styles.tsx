import styled from 'styled-components';
import IconPlus from '../../assets/icons/iconPlus.png';
import IconMinus from '../../assets/icons/iconMinus.png';
import { IconImageProps } from '../Menu/interface'
import { QuantityProps } from './interface';
import { COLORS } from '../../../config/config';

const Container = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 10px;
  align-items: center;
`;


const Icon = styled.img<IconImageProps>`
  object-fit: cover;
  display: flex;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  cursor: pointer;
`;

const TextItem = styled.span<IconImageProps>`
    color: ${COLORS.main};
    text-align: center;
    font-size: ${props=> props.size}px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0px 16px;
`;

export const ItemQuantity: React.FC<QuantityProps> = ({ iconSize, numberSize }) => {
    return (
        <Container>
            <Icon src={IconMinus} size={iconSize}  />
            <TextItem size={numberSize}>1</TextItem>
            <Icon src={IconPlus} size={iconSize} />
        </Container>
    )
}

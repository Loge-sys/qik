import styled from 'styled-components';
import PrimaryButton from '../../components/PrimaryButton';

export const BackgroundContainer = styled.div`
    background-color: ${props => props.color};
    height: 100vh;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
    margin: auto;

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (min-width: 765px) and (max-width: 1020px) {
        width: 95%;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    padding: 32px 40px;
    align-items: flex-start;
    gap: 24px;
    flex-shrink: 0;
    background-color: #F8F9FA;

    @media (max-width: 768px) {
        background-color: #FFF;
        padding: 0px;
    }
`;

const BasketButtonContainer = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        align-items: center;
        justify-content: center;
        height: 100px;
        backdrop-filter: blur(4px);
    }
`;

export const BasketButton = ({ itemsQuantity, click }: { itemsQuantity: number, click: React.MouseEventHandler<HTMLButtonElement> }) => {
    const renderItemText = () => {
        return itemsQuantity > 1 ? 'items' : 'item'
    }

    const renderBasketButton = () => {
        if (itemsQuantity && itemsQuantity > 0) {
            return (
                <BasketButtonContainer>
                    <PrimaryButton text={`Your basket • ${itemsQuantity} ${renderItemText()}`} disabled={false} handleClick={click} />
                </BasketButtonContainer>
            )
        }
    }

    return renderBasketButton()
}
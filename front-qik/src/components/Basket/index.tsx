import { 
  Container, 
  BasketContent, 
  HeaderContainer, 
  HeaderText, 
  MobileContainer, 
  MobileCloseIcon,
  HeaderMobileContainer,
  TextHeaderMobile,
  CheckoutButtonContainer
} from './styles';
import { useBasket } from '../../redux/Basket/sliceBasket';
import { useSelector } from 'react-redux';
import PrimaryButton from '../PrimaryButton';

const Basket = ({ openBasket = false, close } : { openBasket: boolean, close: () => void }) => {
  const basketList = useSelector(useBasket)

  const renderMobile = () => {
    if (openBasket) {
      return (
        <MobileContainer>
          <HeaderMobileContainer>
            <TextHeaderMobile>Basket</TextHeaderMobile>
            <MobileCloseIcon onClick={close} />
          </HeaderMobileContainer>
          <BasketContent basket={basketList} />
          <CheckoutButtonContainer>
            <PrimaryButton text='Checkout now' disabled={false} handleClick={close} />
          </CheckoutButtonContainer>
        </MobileContainer>
      )
    }
  }

  const renderContent = () => {
    return (
      <>
        <Container>
          <HeaderContainer>
            <HeaderText>Carrinho</HeaderText>
          </HeaderContainer>
          <BasketContent basket={basketList} />
        </Container>
        {renderMobile()}
      </>
    )
  }

  return renderContent()
};

export default Basket;
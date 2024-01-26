import { useState } from 'react'
import Search from '../../components/Search'
import MenuItems from '../../components/Menu'
import Basket from '../../components/Basket'
import { Container, ContentContainer, BackgroundContainer, BasketButton } from './styles'
import { useSelector } from 'react-redux'
import { useConfig } from '../../redux/Config/sliceConfig'
import { useBasket } from '../../redux/Basket/sliceBasket'

const Menu = () => {
    const config = useSelector(useConfig)
    const basketList = useSelector(useBasket)
    const [ openBasket, setOpenBasket ] = useState(false)
    
    const handleOpenkBasket = () => {
        setOpenBasket(true)
    }

    const handleCloseBasket= () => {
        setOpenBasket(false)
    }

    return (
        <BackgroundContainer color={config[0]?.backgroundColour}>
            <Container>
                <Search />
                <ContentContainer>
                    <MenuItems />
                    <Basket openBasket={openBasket} close={handleCloseBasket} />
                </ContentContainer>
                <BasketButton itemsQuantity={basketList.length} click={handleOpenkBasket} />
            </Container>
        </BackgroundContainer>
    )
}

export default Menu

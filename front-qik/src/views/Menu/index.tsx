import Search from '../../components/Search'
import MenuItems from '../../components/Menu'
import Basket from '../../components/Basket'
import { Container, ContentContainer, BackgroundContainer } from './styles'
import { useSelector } from 'react-redux'
import { useConfig } from '../../redux/sliceConfig'

const Menu = () => {
    const config = useSelector(useConfig)

    return (
        <BackgroundContainer color={config[0]?.backgroundColour}>
            <Container>
                <Search />
                <ContentContainer>
                    <MenuItems />
                    <Basket />
                </ContentContainer>
            </Container>
        </BackgroundContainer>
    )
}

export default Menu

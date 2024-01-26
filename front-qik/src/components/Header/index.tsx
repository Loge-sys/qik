import { 
    MenuContainer, 
    Text, 
    HeaderImage, 
    Container, 
    TextContainer, 
    UnderlineContainer, 
    MobileMenuContainer, 
    MobileText, 
    MobileMenuIcon 
} from './styles'
import { useSelector } from 'react-redux'
import { useConfig } from '../../redux/Config/sliceConfig'

const Header = () => {
    const config = useSelector(useConfig)

    const renderMenu = () => {
        return (
            <>
                <MenuContainer color={config[0]?.navBackgroundColour}> 
                <TextContainer>
                    <UnderlineContainer>
                        <Text>MENU</Text>
                    </UnderlineContainer>
                    <Text>ENTRAR</Text>
                    <Text>CONTATO</Text>
                </TextContainer>
                </MenuContainer>
                <MobileMenuContainer color={config[0]?.navBackgroundColour}>
                    <MobileText>Menu</MobileText>
                    <MobileMenuIcon />
                </MobileMenuContainer>
            </>
        )
    }

    return (
        <Container>
            {renderMenu()}
            <HeaderImage img={config[0]?.bannerImage} />
        </Container>
    )
}

export default Header

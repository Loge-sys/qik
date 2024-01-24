import { Col } from 'antd'
import { RowContainer, Text, HeaderImage, Container } from './styles'
import { useSelector } from 'react-redux'
import { useConfig } from '../../redux/sliceConfig'

const Header = () => {
    
    const config = useSelector(useConfig)
    return (
        <Container>
            <RowContainer color={config[0]?.navBackgroundColour}>  
                <Col>
                    <Text>MENU</Text>
                </Col>
                <Col>
                <Text>ENTRAR</Text>
                </Col>
                <Col>
                <Text>CONTATO</Text>
                </Col>
            </RowContainer>
            <HeaderImage img={config[0]?.bannerImage} />
        </Container>
    )
}

export default Header

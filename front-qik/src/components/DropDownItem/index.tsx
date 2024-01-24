import { useState } from 'react'
import { Container, DropDownHeader } from './styles'
import FoodCard from '../FoodCard'

const DropDownItem = () => {
    const [ show, setShow ] = useState(true)
    const handleClick = () => {
        setShow(!show)
    }

    const renderFoodCard = () => {
        if (show) {
            return <FoodCard />
        }
    }

    return (
        <Container>
            <DropDownHeader click={handleClick} show={show} />
            {renderFoodCard()}
        </Container>
        
    )
}

export default DropDownItem

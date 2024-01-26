import { ItemQuantity } from './styles'
import { QuantityProps } from './interface';

const Quantity: React.FC<QuantityProps> = ({ iconSize, numberSize }) => {
    return <ItemQuantity iconSize={iconSize} numberSize={numberSize} />
}

export default Quantity

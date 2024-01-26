import { Button } from './styles'
import { useSelector } from 'react-redux'
import { useConfig } from '../../redux/Config/sliceConfig'
import { PrimaryButtonProps } from './interface'
const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, handleClick, disabled = false }) => {
    const config = useSelector(useConfig)

    return <Button color={config[0]?.primaryColour} text={text} click={handleClick} disabled={disabled}  />
}

export default PrimaryButton

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;


export const PrimaryButton = styled.button`
  color: #FFF;
  border-radius: 40px;
  background: ${props => props.color};
  display: flex;
  height: 48px;
  padding: 4px 80px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  opacity: ${props => props.disabled ? 0.6 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

export const TextButton = styled.span`
  color:  #FFF;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.75px;
`;


export const Button = ({ color, text, click, disabled } : {color: string, text: string, click: React.MouseEventHandler<HTMLButtonElement>, disabled: boolean}) => {
    return (
        <Container>
            <PrimaryButton disabled={disabled} color={color} onClick={click}>
              <TextButton>{text}</TextButton>
            </PrimaryButton>
        </Container>
    )
}

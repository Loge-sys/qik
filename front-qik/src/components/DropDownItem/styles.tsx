import styled from 'styled-components'
import ArrowUp from '../../assets/icons/arrowUp.png'
import { IconArrowUpProps,  } from './interface'
export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 32px 16px 12px 16px;
    gap: 8px;
`;

const TitleHeader = styled.span`
    color: var(--Copy-Main, #121212);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
`;

export const IconArrowUp = styled.img.attrs(() => ({
    src: ArrowUp,
  }))<IconArrowUpProps>`
    width: 20px;
    height: 20px;
    transform: ${props => (props.show === 'false' ? 'rotate(180deg)' : 'rotate(0deg)')};
  `;
  

export const DropDownHeader = ({ click, show }: { click: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void, show: boolean  }) => {
    return (
        <HeaderContainer onClick={click}>
            <TitleHeader>
                Burgers
            </TitleHeader>
            <IconArrowUp show={show ? 'true' : 'false'} />
        </HeaderContainer>
    )
}

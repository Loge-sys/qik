import styled from 'styled-components';
import { HeaderImageProps } from './interface'
import MenuIcon from '../../assets/icons/menu.png'

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 42%;

  @media (min-width: 768px) and (max-width: 1300px) {
    width: 70%;
}
`;

export const UnderlineContainer = styled.div`
  display: flex;
  border-bottom: 2px solid #FFF;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${props => props.color};

  @media (max-width: 768px) {
    display: none;
  }

`;

export const MobileMenuIcon = styled.img.attrs(() => ({
  src: MenuIcon,
}))`
  width: 16px;
  height: 16px;
  position: absolute;
  right: 16px;
`;

export const MobileMenuContainer = styled.div`
  display: none;
  background: ${props => props.color};
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 14px 16px;
    align-items: center;
    gap: 8px;
  }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  color: #FFF;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  padding: 10px;
  width: 200px;
  cursor: pointer;
`;

export const MobileText = styled.span`
  color: #FFF;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.75px;
`;


export const HeaderImage = styled.img.attrs<HeaderImageProps>(props => ({
  src: props.img
}))<HeaderImageProps>`
  object-fit: cover;
  display: flex;
  @media (max-width: 768px) {
    height: 150px;
  }

`;
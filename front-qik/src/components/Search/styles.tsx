import styled from 'styled-components';
import Icon from '../../assets/icons/search.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
  margin-top: 11px;
`;

export const TextInputSearch = styled.input`
  border-radius: 8px;
  padding: 13px 12px 11px 30px;
  flex: 1;
  position: relative;
  z-index: 1;
  border: 1px solid #8A94A4;
  ::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const IconSearch = styled.img.attrs(() => ({
  src: Icon,
  alt: 'Search Icon',
}))`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 10px;
  z-index: 2;
`;

export const InputSearch = () => (
  <ContainerInput>
    <IconSearch />
    <TextInputSearch placeholder='Search menu items' />
  </ContainerInput>
);

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  flex-shrink: 0;
  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.15);
  width: 31%;

  @media (max-width: 768px) {
    display: none;
  }
`;


const HeaderContainer = styled.div`
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;

const HeaderText = styled.span`
  color: var(--Copy-Secondary, #464646);
  font-feature-settings: 'clig' off, 'liga' off;
  /* H1 Header / Section Title */
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.5px;
`;

const HeaderContent = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  background: var(--White, #FFF);
`;

export const BasketHeader = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderText>Carrinho</HeaderText>
      </HeaderContainer>
      <HeaderContent>
          Seu carrinho está vazio
      </HeaderContent>
    </>
  )
}

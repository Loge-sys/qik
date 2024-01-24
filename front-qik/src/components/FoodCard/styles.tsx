import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 16px 12px 16px;
  gap: 8px;
`;

const CardTitle = styled.span`
  color: var(--Copy-Main, #121212);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CardDescription = styled.span`
  color: var(--Copy-Secondary, #464646);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const CardPrice = styled.span`
  color: var(--Copy-Secondary, #464646);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.5px;
`;


export const Card = () => {
    return (
        <ContentContainer>
            <TextContainer>
                <CardTitle>Hardcore</CardTitle>
                <CardDescription>180g angus beef burger, plus ribs, gruyere cheese...</CardDescription>
                <CardPrice>R$33,00</CardPrice>
            </TextContainer>
        </ContentContainer>
    )
}
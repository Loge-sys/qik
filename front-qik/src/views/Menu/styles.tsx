import styled from 'styled-components';

export const BackgroundContainer = styled.div`
    background-color: ${props => props.color};
    height: 100vh;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
    margin: auto;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    padding: 32px 40px;
    align-items: flex-start;
    gap: 24px;
    flex-shrink: 0;
    background-color: #F8F9FA;

    @media (max-width: 768px) {
        background-color: #FFF;
        padding: 0px;
    }
`;

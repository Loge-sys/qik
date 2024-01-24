import styled from 'styled-components';
import { Row, RowProps } from 'antd';
import { HTMLAttributes } from 'react';

interface RowContainerProps extends RowProps {
  color?: string;
}

interface HeaderImageProps extends HTMLAttributes<HTMLImageElement> {
  img?: string;
}

export const RowContainer = styled(Row)<RowContainerProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${props => props.color};
  padding: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  color: var(--White, #FFF);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.1px;
  text-transform: uppercase;
`;

export const HeaderImage = styled.img.attrs<HeaderImageProps>(props => ({
  src: props.img
}))<HeaderImageProps>`
  object-fit: cover;
  display: flex;
`;
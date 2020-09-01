import React from 'react';
import styled from 'styled-components';
interface Props {
  children: any;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'primary' | 'secondary';
}

interface StyledProps {
  type: 'primary' | 'secondary';
}
const secondary = '#607D8B';
const primary = '#1976D2';
const StyledButton: any = styled.button`
  padding: 20px;
  border: none;
  margin: 20px;
  border-radius: 13px;
  color: #fff;
  background: ${primary};
  ${(props: StyledProps) =>
    props.type === 'secondary' && `background: ${secondary};`}
`;

const Button: React.FC<Props> = ({
  children,
  onClick,
  type = 'primary',
}: Props) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;

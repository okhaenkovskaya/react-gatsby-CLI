import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    color?: string;
}


const getStyledContainer = (): React.ComponentType<ButtonProps> => {
    return styled.button`
        cursor:pointer;
        padding: 5px;
        margin: 0 5px 5px 0;
        min-width: 150px;
        height: 50px;
        text-align: center;
        border: 0;
        display: inline-block;
        vertical-align: top;
      

        ${(props) => props.color == 'light' ? `
            background: ${props.theme.colors.brand.blue};
            color:  ${props.theme.colors.brand.white};      
        ` : `
            background: black;
            color: yellow;     
        ` };
    `
}

const Button = ({children, className, onClick, color}: ButtonProps) => {
    const ButtonComponent = getStyledContainer();

    return (
        <ButtonComponent className={className} onClick={onClick} color={color}>
            {children}
        </ButtonComponent>
    );
};

export default Button;

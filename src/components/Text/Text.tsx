import React from 'react';
import styled from 'styled-components';

interface TextProps {
    children: React.ReactNode;
    className?: string;
    margin?: string;
    align?: string;
    size?: number;
}

const getStyledContainer = (): React.ComponentType<TextProps> => {
    return styled.p`
        margin: ${(props) => props.margin ? props.margin : '0' };
        text-align: ${(props) => props.align ? props.align : 'left' };
        line-height:  1.2;
        font-size: ${(props) => props.size ? props.size : '18' }px;
    `
}

const Text = ({children, className, margin, align, size}: TextProps) => {
    const TextComponent = getStyledContainer();

    return (
        <TextComponent className={className} margin={margin} align={align} size={size}>
            {children}
        </TextComponent>
    );
};

export default Text;

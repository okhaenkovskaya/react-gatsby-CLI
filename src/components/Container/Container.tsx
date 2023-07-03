import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
    justify?: string;
    display?: string;
    children: React.ReactNode;
    className?: string;
    width?: string;
}

const getStyledContainer = (): React.ComponentType<ContainerProps> => {
    return styled.div`
        width: ${(props) => props.width ? props.width : '1280px' };
        margin: 0 auto;
        display: ${(props) => props.display ? props.display : 'block' };
        justify-content: ${(props) => props.justify ? props.justify : 'flex-start' };
    `
}

const Container = ({children, className, width, display, justify}: ContainerProps) => {
    const ContainerComponent = getStyledContainer();

    return (
        <ContainerComponent className={className} width={width} display={display} justify={justify}>
            {children}
        </ContainerComponent>
    );
};

export default Container;

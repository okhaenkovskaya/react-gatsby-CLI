import React from 'react';
import styled from 'styled-components';

interface RowProps {
    justify?: string;
    display?: string;
    children: React.ReactNode;
    className?: string;
    align?: string;
    wrap?: string;
    direction?: string;
}

const getStyledRow = (): React.ComponentType<RowProps> => {
    return styled.div`
        display: ${(props) => props.display ? props.display : 'flex' };
        justify-content: ${(props) => props.justify ? props.justify : 'flex-start' };
        flex-direction: ${(props) => props.direction ? props.direction : 'row' };
        flex-wrap: ${(props) => props.wrap ? props.wrap : 'nowrap' };
        align-items: ${(props) => props.align ? props.align : 'flex-start' };
    `
}

const Row = ({children, className, display, justify, align, wrap, direction}: RowProps) => {
    const RowComponent = getStyledRow();

    return (
        <RowComponent className={className} display={display} justify={justify} align={align} wrap={wrap} direction={direction}>
            {children}
        </RowComponent>
    );
};

export default Row;

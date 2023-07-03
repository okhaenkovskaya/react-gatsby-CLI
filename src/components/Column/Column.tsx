import React from 'react';
import styled from 'styled-components';

interface RowProps {
    children: React.ReactNode;
    className?: string;
    width?: string;
    padding?: string;
}

const getStyledColumn = (): React.ComponentType<RowProps> => {
    return styled.div`
        padding: ${(props) => props.padding ? props.padding : '0' };
        width: ${(props) => props.width ? props.width : '10%' };
    `
}

const Column = ({children, className, width, padding }: RowProps) => {
    const ColumnComponent = getStyledColumn();

    return (
        <ColumnComponent className={className} width={width} padding={padding} >
            {children}
        </ColumnComponent>
    );
};

export default Column;

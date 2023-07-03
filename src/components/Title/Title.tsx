import React from 'react';
import styled from 'styled-components';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface TitleProps {
    level: HeadingLevel;
    children: React.ReactNode;
    className?: string;
    color?: string;
    margin?: string;
    transform?: string;
}

interface StyleTitleProps {
    children: React.ReactNode;
    className?: string;
    color?: string;
    margin?: string;
    transform?: string;
}

const fontSize = ['38px', '30px', '20px', '18px', '17px', '16px'];
const lineHeights = ['1.2', '34px', '20px', '18px', '17px', '16px'];

const getStyledTitle = (
    level: HeadingLevel
): React.ComponentType<StyleTitleProps> => {
    const HeadingTag = `h${level}` as "h1" | "h2" |"h3" |"h4" |"h5" | "h6";

    return styled[HeadingTag]`
        font-size: ${fontSize[level - 1]};
        line-height: ${lineHeights[level - 1]};
        color: ${(props) => props.color ? props.color : props.theme.colors.brand.blue };
        margin:${(props) => props.margin || '0'} ;
    `
}

const Title = ({level, children, className, color, margin, transform}: TitleProps) => {
    const TitleComponent = getStyledTitle(level)

    return (
        <TitleComponent className={className} color={color} margin={margin} transform={transform}>
            {children}
        </TitleComponent>
    );
};

export default Title;

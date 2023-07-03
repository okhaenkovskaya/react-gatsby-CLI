import React from 'react';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";


interface HeroProps {
    children: React.ReactNode;
    className?: string;
    height?: string;
    image?: string | undefined;
    alt?: string;
}

const getStyledHero = (): React.ComponentType<HeroProps> => {
    return styled.div`
      height: ${(props) => props.height ? props.height : '50vh' };
      position: relative;
      
      >div:not(.gatsby-image-wrapper) {
        position: relative;
        z-index: 2;
      }
      
      .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100% !important;
        height: 100% !important;
        overflow: hidden;
        
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }
      }
    `
}

const Hero = ({children, className, height}: HeroProps) => {
    const HeroComponent = getStyledHero();

    return (
        <HeroComponent className={className} height={height}>
            {children}
        </HeroComponent>
    )
};

export default Hero;

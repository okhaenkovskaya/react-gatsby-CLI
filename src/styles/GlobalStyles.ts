import { createGlobalStyle} from "styled-components";
import {normalize} from "styled-normalize";

import fonts from "./fonts";
import dancingFont from "../fonts/DancingScript-VariableFont_wght.ttf";

const createFontFace = (
    family: string,
    weight: string | number,
    fontFile: string,
    format: string,
) => `
    @font-face {
        font-family: '${family}';
        font-weight: '${weight}';
        src: url('${fontFile}') format('${format}');
        font-display: swap;
    }
`;

const fontFaces = {
    caprasimo: createFontFace("caprasimoFont", 400, fonts.caprasimoFont, 'truetype'),
    dancing: createFontFace('dancingFont', 400, fonts.dancingFont, 'truetype'),
}

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  ${fontFaces.caprasimo}
  ${fontFaces.dancing}
  
  :root {
    --body-font-size: 18px;
    --body-font-weight: 400;
    --body-font-family: "caprasimoFont", sans-serif;
    --heading-font-family: "dancingFont", sans-serif;
  }
  
  html {
    height: 100%;
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
  body {
    font-size: var(--body-font-size);
    font-family: var(--body-font-family);
    color:${({theme}) => theme.colors.brand.blue}
  }
  
  h1, h2,
  h3, h4 {
    font-family: var(--heading-font-family);
  }
  
  
`;
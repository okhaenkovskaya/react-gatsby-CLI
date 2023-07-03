import { DefaultTheme } from "styled-components";

const COLORS = {
    blue: "#123576",
    white: "#f1f1f1",
    black: "#011",
}

const MEDIA_QUERY_SIZES = {
    xs: "375px",
    md: "768px",
    xl: "1366px",
}

const createMediaQuery = (size: string) => `@media (min-width: ${size})`;

const AppTheme: DefaultTheme = {
    colors: {
        brand: {
            blue: COLORS.blue,
            white: COLORS.white,
            black: COLORS.black,
        },
        interface: {
            blue: COLORS.blue,
            white: COLORS.white,
            black: COLORS.black,
        }
    },
    mediaQuery: {
        xs: createMediaQuery(MEDIA_QUERY_SIZES.xs),
        md: createMediaQuery(MEDIA_QUERY_SIZES.md),
        xl: createMediaQuery(MEDIA_QUERY_SIZES.xl),
    }
}

export {AppTheme}
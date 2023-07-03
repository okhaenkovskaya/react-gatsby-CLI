import React from "react";
import { ThemeProvider } from "styled-components";

import {AppTheme} from "../styles/Theme";
import {GlobalStyles} from "../styles/GlobalStyles";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

type Props = {
    children: React.ReactNode;
}

export const Layout = ({children}: Props) => {
   return( <ThemeProvider theme={AppTheme}>
        <GlobalStyles />
        <Header />
        <main>
            {children}
        </main>
        <Footer/>
    </ThemeProvider>
   )
}

import React from "react"
import "./fonts/fonts.css"
import "./styles/normalize.css"
import HeaderContainer from "./components/Header/HeaderContainer";
import MainContainer from "./components/Main/MainContainer";
import CharactersContainer from "./components/Characters/CharacterContainer";
import ContactContainer from "./components/Contact/ContactContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import {GlobalStyle} from "./styles/GlobalStyle";
import {light, dark} from "./styles/Themes";
import {ThemeProvider} from "styled-components";

const App = props => (

    <ThemeProvider theme={() => props.theme === "light" ? light : dark}>
        <GlobalStyle/>
        <HeaderContainer/>
        <MainContainer/>
        <CharactersContainer/>
        <ContactContainer/>
        <FooterContainer/>
    </ThemeProvider>

)

export default App;

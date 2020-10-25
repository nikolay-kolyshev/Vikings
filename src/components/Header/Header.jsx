import React from "react"
import {NavLink} from "react-router-dom"
import logo from "../../logo.svg"
import {Outer, Inner, ThemeSwitch, Nav} from "./style"
import {MainLogo, MainPhoneIcon, MainPhoneLink, Wrapper} from "../../styles/style"

const Header = props => (
    <Outer>
            <Wrapper>
                <Inner>
                    <NavLink to="/">
                        <MainLogo>
                            <img src={logo} alt="Логотип сайта"/>
                        </MainLogo>
                    </NavLink>
                    <Nav>
                        <ThemeSwitch>
                            <input onClick={props.toggleTheme}type="checkbox" id="switch"/>
                            <label htmlFor="switch"></label>
                        </ThemeSwitch>
                        <MainPhoneIcon href="tel:888"></MainPhoneIcon>
                        <MainPhoneLink>
                            <a href="tel:7(962)556-1234">{props.phoneNumber}</a>
                        </MainPhoneLink>
                    </Nav>
                </Inner>
            </Wrapper>
    </Outer>
)

export default Header
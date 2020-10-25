import React from "react"
import {Company, Inner, Outer, WebSurfer} from "./style";
import {MainLogo, MainPhoneIcon, MainPhoneLink} from "../../styles/style";
import logo from "../../logo.svg";

const Footer = props => (
    <Outer>
        <Inner>
            <MainLogo spacing>
                <img src={logo} alt="Логотип сайта"/>
            </MainLogo>
            <Company>
                <span>© 2020 Викинги. Все права защищены.</span>
            </Company>
            <MainPhoneIcon spacing href="tel:888"></MainPhoneIcon>
            <WebSurfer>
                <pre>Сделано </pre>
                <a href={props.author.link} target="_blank">{props.author.name}</a>
            </WebSurfer>
            <MainPhoneLink>
                <a href="tel:7(962)556-1234">{props.phoneNumber}</a>
            </MainPhoneLink>
        </Inner>
    </Outer>
)

export default Footer
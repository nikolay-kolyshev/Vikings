import React from "react"
import {MainBackground, MainButton, MainDescription, MainTitle, Wrapper} from "../../styles/style"
import {Outer, Inner} from "./style"
import {Link} from "react-scroll"
import background from "../../assets/images/main-back.jpg"

const Main = props => {

    return (
        <Outer>
            <MainBackground>
                <img src={background} alt=""/>
            </MainBackground>
            <Wrapper>
                <Inner>
                    <MainTitle>{props.title}</MainTitle>
                    <MainDescription>
                        {props.description}
                    </MainDescription>
                    <Link to="characters" smooth={true} duration={1200} offset={1}>
                        <MainButton>
                            <span>Подробнее</span>
                        </MainButton>
                    </Link>
                </Inner>
            </Wrapper>
        </Outer>
    )
}

export default Main
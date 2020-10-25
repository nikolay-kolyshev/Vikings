import React from "react"
import {Wrapper} from "../../styles/style"
import {
    Outer,
    Inner,
    Description,
    Slider, SliderArrow,
    SliderItem,
    SliderItemFeature,
    SliderItemImg,
    SliderItems,
    SubTitle,
    Title
} from "./style"

const Characters = props => {

    const charactersElements = props.characters.map(character => (
        <SliderItem key={character.id}>
            <SliderItemImg avatar={character.avatar}></SliderItemImg>
            <SliderItemFeature>{character.name}</SliderItemFeature>
        </SliderItem>
    ))

    return (
        <Outer id="characters">
            <Wrapper>
                <Inner>
                    <Title>{props.title}</Title>
                    <SubTitle>{props.subtitle}</SubTitle>
                    <Description>
                        {props.description}
                    </Description>
                    <Slider>
                        <SliderItems>
                            {charactersElements}
                        </SliderItems>
                        <SliderArrow direction="prev">
                            <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                                </path>
                            </svg>
                        </SliderArrow>
                        <SliderArrow direction="next">
                            <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                                </path>
                            </svg>
                        </SliderArrow>
                    </Slider>
                </Inner>
            </Wrapper>
        </Outer>
    )

}

export default Characters
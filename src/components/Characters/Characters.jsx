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
    Title, Slide
} from "./style"
import CharactersSlider from "./Slider/CharactersSlider";

const Characters = props => {

    const charactersElements = props.characters.map(character => (
        <figure key={character.id}>
            <SliderItemImg avatar={character.avatar}></SliderItemImg>
            <SliderItemFeature>{character.name}</SliderItemFeature>
        </figure>
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
                    <CharactersSlider characters={charactersElements}/>
                </Inner>
            </Wrapper>
        </Outer>
    )

}

export default Characters
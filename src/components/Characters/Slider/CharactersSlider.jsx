import React from "react"
import Slider from "react-slick"
import "./style"
import {SliderArrow, StyledCharactersSlider} from "./style";

const NextArrow = props => (
    <SliderArrow direction="next" onClick={props.onClick}>
        <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
            </path>
        </svg>
    </SliderArrow>
)

const PrevArrow = props => (
    <SliderArrow direction="prev" onClick={props.onClick}>
        <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
            </path>
        </svg>
    </SliderArrow>
)

class CharactersSlider extends React.Component {

    render() {

        let settings = {
            prevArrow: <PrevArrow/>,
            nextArrow: <NextArrow/>,
            speed: 1000,
            easing: "ease",
            slidesToShow: 4,
            draggable: false,

            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        draggable: true
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        draggable: true
                    }
                }
            ]

        }

        return (
            <StyledCharactersSlider>
                <Slider {...settings}>
                    {this.props.characters}
                </Slider>
            </StyledCharactersSlider>

        )

    }

}

export default CharactersSlider
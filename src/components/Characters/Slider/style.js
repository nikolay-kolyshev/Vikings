import styled from "styled-components"

export const StyledCharactersSlider = styled.div`

    margin-top: 30px;

    /* Слайдер */
    .slick-slider{
        position: relative;
    }
    /* Слайдер запущен */
    .slick-slider.slick-initialized{}
    /* Слайдер с точками */
    .slick-slider.slick-dotted{}
    /* Ограничивающая оболочка */
    .slick-list {
        overflow: hidden;
    }
    /* Лента слайдов */
    .slick-track{
        display: flex;
    }
    /* Слайд */
    .slick-slide{
        display: flex;
        justify-content: center;
        
        & > div {
            display: flex;
            justify-content: center;
        }
    }
    /* Слайд активный (показывается) */
    .slick-slide.slick-active{}
    /* Слайд основной */
    .slick-slide.slick-current{}
    /* Слайд по центру */
    .slick-slide.slick-center{}
    /* Клонированный слайд */
    .slick-slide.slick-cloned{}
    
    /* Стрелка */
    .slick-arrow{
        position: absolute;
        top: 50%;
        z-index: 10;
        font-size: 0;
    }
    /* Стрелка влево */
    .slick-arrow.slick-prev{
        left: 0;
    }
    /* Стрелка вправо */
    .slick-arrow.slick-next{
        right: 0;
    }
    /* Стрелка не активная */
    .slick-arrow.slick-disabled{}
    
    /* Точки (булиты) */
    .slick-dots{}
    .slick-dots li{}
    /* Активная точка */
    .slick-dots li.slick-active{}
    /* Элемент точки */
    .slick-dots li button{}
`

export const SliderArrow = styled.button`
    position: absolute;
    z-index: 1000;
    display: flex;
    top: 40%;
    border-radius: 50%;
    border: none;
    width: 38px;
    height: 38px;
    background: #FFFFFF;
    box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.05);
    outline: transparent;
    cursor: pointer;
    transition: background ease .35s;
    
    ${props => props.direction === "next" ? "right: 0;" : "left: 0;"}
    
    &:hover, &:active {
        background: ${({theme})=>theme.slider.background};
        
        svg {
            fill: #ffffff;
        }
    }
    
    svg {
        margin: auto;
        fill: ${({theme})=>theme.slider.inner};
        
        ${props => props.direction === "prev" && "transform: rotate(180deg);"}
    }
`


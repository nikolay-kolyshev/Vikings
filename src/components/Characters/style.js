import styled from "styled-components"

export const Outer = styled.section`
    background-color: ${({theme}) => theme.colors.second};
    text-align: center;
    color: ${({theme}) => theme.colors.main};
`

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 30px 0 60px;
    
    @media (min-width: 992px) {
        padding-top: 60px;
    }
    
    @media (min-width: 1200px) {
        padding: 70px 0;
    }
`

export const Title = styled.h2`
    margin: 0;
    font-weight: bold;
    font-size: 20px;
    
    @media (min-width: 576px) {
        font-size: 28px;
    }
    
    @media (min-width: 768px) {
        font-size: 30px;
        margin: 0 auto;
    }
    
    @media (min-width: 992px) {
        font-size: 32px;
    }
    
    @media (min-width: 1200px) {
        font-size: 35px;
    }
`

export const SubTitle = styled.h3`
    position: relative;
    margin: 15px auto 0;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    
    &:before {
        position: absolute;
        top: 50%;
        left: -60px;
        content: '';
        width: 20px;
        height: 1px;
        background-color: ${({theme}) => theme.colors.main};
    }

    &:after {
        position: absolute;
        top: 50%;
        right: -60px;
        content: '';
        width: 20px;
        height: 1px;
        background-color: ${({theme}) => theme.colors.main};
    }
    
    @media (min-width: 576px) {
        font-size: 20px;
        
        &:before{
            height: 2px;
        }
        
        &:after{
            height: 2px;
        }
    }
    
    @media (min-width: 768px) {
        font-size: 20px;
    }
    
    @media (min-width: 1200px) {
        font-size: 22px;
    }
`

export const Description = styled.div`
    margin-top: 25px;
    font-weight: 400;
    line-height: 17px;
    font-size: 12px;
    text-align: center;
    
    @media (min-width: 576px) {
        font-size: 28px;
        line-height: 20px;
        font-size: 14px;
        padding: 0 60px;
    }
    
    @media (min-width: 768px) {
        line-height: 24px;
        font-size: 16px;
    }
    
    @media (min-width: 1200px) {
        line-height: 25px;
        font-size: 18px;
    }
`

// Slider

export const Slider = styled.div`
    margin-top: 45px;
    position: relative;
`

export const SliderItems = styled.div`
    display: flex;
    justify-content: center;
    
    @media (min-width: 576px) {
        display: flex;
        justify-content: space-around;
    }
`

export const SliderItem = styled.div`
    &:not(:first-child){
        display: none;
    }
   
    @media (min-width: 576px) {
        &:nth-child(2) {
            display: block;
        }
    }
    
    @media (min-width: 768px) {
        &:nth-child(3) {
            display: block;
        }
    }
    
    @media (min-width: 992px) {
        &:nth-child(4) {
            display: block;
        }
    }
`

export const SliderItemImg = styled.div`
    margin: 0 auto;
    width: 130px;
    height: 130px;
    background-repeat: no-repeat;
    background-size: 130px auto;
    background-image: url(${props=>props.avatar});  
    
    @media (min-width: 1200px) {
        width: 200px;
        height: 200px;
        background-repeat: no-repeat;
        background-size: 200px auto;
    }
`

export const SliderItemFeature = styled.div`
    margin: 26px auto 0;
    max-width: 200px;
    font-weight: 500;
    line-height: 25px;
    font-size: 18px;
    text-align: center;
    
    @media (min-width: 1200px) {
        font-size: 20px;
    }
`

export const SliderArrow = styled.button`
    position: absolute;
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
        background: orangered;
        
        svg {
            fill: #ffffff;
        }
    }
    
    svg {
        margin: auto;
        fill: #362725;
        
        ${props => props.direction === "prev" && "transform: rotate(180deg);"}
    }
    
    @media (min-width: 1024px) {
        display: none;
    }
`
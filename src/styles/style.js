import styled from "styled-components"

export const Wrapper = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding: 0 15px;
    height: 100%;
    
    @media (min-width: 576px) {
        max-width: 540px;
    }
    
    @media (min-width: 768px) {
        max-width: 720px;
    }
    
    @media (min-width: 992px) {
            max-width: 960px;
    }
    
    @media (min-width: 1200px) {
            max-width: 1140px;
    }
`

export const MainButton = styled.button`
    cursor: pointer;
    background: white;
    box-shadow: 0 4px 25px rgba(21, 169, 203, 0.3);
    border-radius: 50px;
    outline: none;
    border: transparent;
    transition background-color ease .5s;
    padding: 9px 29px;
    margin: 60px auto 0;
    
    span {
        font-family: "Exo 2", sans-serif;
        font-weight: 600;
        font-size: 16px;
        color: ${({theme})=>theme.colors.button};
    }

    &:hover, &:active {
        background-color: ${({theme})=>theme.colors.button};;
        box-shadow: 0 4px 25px rgba(234, 86, 52, 0.3);
        span{
            color: white;
        }
    }
    
    @media (min-width: 576px) {
        padding: 11px 39px;
    }
    
    @media (min-width: 768px) {
        padding: 11px 39px;
    }
    
    @media (min-width: 992px) {
        padding: 12px 49px;
        
        span{
            font-size: 20px;
        }
    }
`

export const MainBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    
    &:after{
        content: "";
        display: block;
        background: linear-gradient(
            ${props=>props.gradientInversion && "-"}45deg,
            ${({theme})=>theme.gradients.first},
            ${({theme})=>theme.gradients.second}
        );
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
`

export const MainTitle = styled.div`
    margin: 0;
    font-weight: 800;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.86);
    
    @media (min-width: 576px) {
        font-size: 30px;
        padding: 0 80px;
    }
    
    @media (min-width: 768px) {
        font-size: 36px;
        padding: 0 90px;
    }
    
    @media (min-width: 992px) {
        font-size: 40px;
    }
    
    @media (min-width: 1200px) {
        font-size: 52px;
    }
`

export const MainDescription = styled.div`
    margin: 25px 0 0;
    font-weight: 400;
    line-height: 20px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.75);
    
    @media (min-width: 576px) {
        font-size: 16px;
        padding: 0 60px;
    }
    
    @media (min-width: 768px) {
        font-size: 16px;
        padding: 0 80px;
        max-width: 750px;
        margin: 27px auto 0;
    }
    
    @media (min-width: 992px) {
        font-size: 18px;
    }
    
    @media (min-width: 1200px) {
        font-size: 22px;
        line-height: 31px;
    }
`

export const MainLogo = styled.div`
    min-width: 30px;
    min-height: 30px;
    ${ props => props.spacing && "margin-left: 15px;"}
    
    img {
        width: 40px;
    }
    
    @media (min-width: 576px) {
        img {
            width: 40px;
        }
    }
    
    @media (min-width: 768px) {
       margin-left: 0;
    }
    
    @media (min-width: 992px) {
        img {
            width: 45px;
        };
    }
    
    @media (min-width: 1200px) {
        img {
            width: 50px;
        }
    }
`

export const MainPhoneIcon = styled.a`
    background-image: url(./assets/images/phone.svg);
    min-width: 35px;
    min-height: 35px;
    background-repeat: no-repeat;
    background-size: 35px auto;
    cursor: pointer;
    transition: transform ease .4s;
    ${ props => props.spacing && "margin-right: 15px;"}
    
    &:hover, &:active{
        transform: scale(1.12);
    }
    
    @media (min-width: 576px) {
        min-width: 45px;
        min-height: 45px;
        background-size: 45px auto;
        
        &:hover, &:active{
            transform: scale(1.12);
        }
    }
    
    @media (min-width: 768px) {
       display: none;
    }
`

export const MainPhoneLink = styled.div`

    display: none;
    
    @media (min-width: 768px) {
       display: block; 
       a{
           font-size: 18px;
           color: white;
           text-decoration: none;
       }
    }
    
    @media (min-width: 992px) {
        a {
            font-size: 21px;
        }
    }
    
    @media (min-width: 1200px) {
        a {
            font-size: 24px;
        }
    }
`

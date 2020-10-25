import styled from "styled-components"

export const Outer = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #ffffff;
`

export const Inner = styled.div`
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    
    @media (min-width: 992px) {
        padding: 60px 0;
    }
    
    @media (min-width: 1200px) {
        padding: 70px 0;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    
    input {
        width: 290px;
        height: 30px;
        border: 1px solid #FFFFFF;
        border-radius: 50px;
        background-color: transparent;
        padding: 16px 18px;
        margin: 14px auto 0;
        color: #ffffff;
        outline: transparent;
        
        &::placeholder{
            color: rgba(255, 255, 255, 0.5);
            font-size: 14px;
            text-overflow: ellipsis;
            text-indent: 0;
            transition: text-indent 0.3s ease;
        }
        
        &:focus::placeholder{
            text-indent: 500px;
            transition: text-indent 0.3s ease;
        }
    }
    
    @media (min-width: 576px) {
        input {
            width: 377px;
            height: 39px;
        }
    }
    
    @media (min-width: 768px) {
        input::placeholder{
            font-size: 18px;
        }
    }
    
    @media (min-width: 992px) {
        input::placeholder{
            font-size: 20px;
        }
    }
    
    @media (min-width: 1200px) {
        input{
            width: 423px;
            height: 44px;
        }
    }
`

export const Personal = styled.div`
    margin-top: 30px;
    font-weight: 400;
    font-size: 11px;
    
    a {
        color: rgba(255, 255, 255, 0.75);
        
        &:hover{
            color: rgba(255, 255, 255, 1);
        }
    }
    
    @media (min-width: 576px) {
        font-size: 12px;
    }
    
    @media (min-width: 768px) {
        font-size: 14px;
    }
    
    @media (min-width: 992px) {
        font-size: 17px;
    }
    
    @media (min-width: 1200px) {
        font-size: 20px;
    }
`

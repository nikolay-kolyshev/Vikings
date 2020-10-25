import styled from "styled-components"

export const Outer = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    margin-top: 0;
    padding: 10px 0;
`

export const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    position: relative;
`

export const ThemeSwitch = styled.div`

    margin-right: 15px;
    margin-top: -14px;

    input[type=checkbox]{
        height: 0;
        width: 0;
        visibility: hidden;
    }
    
    label{
    
        cursor: pointer;
        text-indent: -9999px;
        width: 70px;
        height: 36px;
        background: ${({theme})=>theme.colors.button};
        display: block;
        border-radius: 100px;
        position: relative;
        
        &:after{
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            width: 26px;
            height: 26px;
            background: #fff;
            border-radius: 90px;
            transition: 0.3s;
        }
    }
    
    
    input {
        
        &:active:after {
            width: 60px;
        }
        
        &:checked + label{
            background: ${({theme})=>theme.colors.button};
        }
        
        &:checked + label:after{
            left: calc(100% - 5px);
            transform: translateX(-100%);
        }
        
    }
    
    @media (min-width: 576px) {
        label {
            width: 70px;
            height: 36px;
            
            &:after{
                width: 26px;
                height: 26px;
            }
        }
        input {
            &:active:after {
                width: 60px;
            }    
        }
    }
    
    @media (min-width: 992px) {
        label {
            width: 80px;
            height: 40px;
            
            &:after{
                width: 30px;
                height: 30px;
            }
        }
        input {
            &:active:after {
                width: 70px;
            }    
        }
    }
    
    @media (min-width: 1200px) {
        label {
            width: 90px;
            height: 46px;
            
            &:after{
                width: 36px;
                height: 36px;
            }
        }
        input {
            &:active:after {
                width: 80px;
            }    
        }
    }
    
    
`
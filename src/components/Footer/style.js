import styled from "styled-components"

export const Outer = styled.footer`
    background: ${({theme})=>theme.footer.top};
    color: white;
`

export const Inner = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-top: 25px;
    
    @media (min-width: 768px) {
        padding: 30px;
    }
    
    @media (min-width: 1200px) {
        padding: 30px;
    }
`

export const Company = styled.div`
    margin-left: 20px;
    flex-grow: 1;
    
    span{
        font-weight: 500;
        line-height: 11px;
        font-size: 8px;
        display: block;
        width: 90px;
    }
    
    @media (min-width: 576px) {
        span {
            font-size: 10px;
            width: 110px;
        }
    }
    
    @media (min-width: 768px) {
        flex-grow: 0;
    }
    
    @media (min-width: 1200px) {
        font-size: 12px;
        width: 130px;
    }
`

export const WebSurfer = styled.div`
    margin-top: 25px;
    padding: 16px;
    flex-basis: 100%;
    background: ${({theme})=>theme.footer.bottom};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    
    a{
        color: rgba(255, 255, 255, 0.75);
        
        &:hover{
            color: rgba(255, 255, 255, 1);
        }
    }
    
    @media (min-width: 768px) {
        flex-basis: auto;
        flex-grow: 1;
        background: none;
        margin-top: 0;
    }
`
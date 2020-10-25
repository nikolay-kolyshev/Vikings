import styled from "styled-components"

export const Outer = styled.main`
    position: relative;
    z-index: 1;
    padding: 110px 0 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    @media (min-width: 768px) {
        padding: 130px 0 80px;
    }
    
    @media (min-width: 992px) {
        padding: 160px 0 80px;
    }
    
    @media (min-width: 1200px) {
        padding: 222px 0 146px;
    }
`

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`
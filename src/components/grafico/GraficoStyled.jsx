import styled from "styled-components";

export const ContainerGraficos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    justify-items: center;
    max-width: 100vw;
    height: 100vh;
    align-content: center;
    
    @media (max-width: 920px){
            grid-template-columns: 1fr;
        }
`

export const GraficoImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 90%;
    color: white;
    gap: .5rem;
    img{
        width: 50%;
    }
    h3{
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 135%;
    }
    p{
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
    }
    h4{
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 125%;
        color: #EEC65F;
    }
`
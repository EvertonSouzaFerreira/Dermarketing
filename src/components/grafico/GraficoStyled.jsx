import styled from "styled-components";



export const ContainerGraficos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    height: 100vh;
    
    .containerGrafico{
    display: flex;
    gap: .5rem;
    justify-content: center;
    align-items: center; 
    }
    
    @media (max-width: 920px){
            grid-template-columns: 1fr;
        }

        .containerPergunta{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        background: none;
        p{
            width: 856px;
            height: 16px;
            color: #E0DEDE;
            font-family: 'Source Sans 3';
            font-style: normal;
            font-weight: 400;
            font-size: 24px; 
            
            @media (max-width: 920px){
            width: 100%;
            text-align: center;
        }
            
        }
        h3{
        width: 100%;
        height: 64px;
        text-align: center;
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        color: #E0DEDE;
        background: none;
        span{
            background: none;
            text-decoration: underline;
            text-decoration-color:#EEC65F;;
            font-weight: 600;
        }
}

        @media (max-width: 920px){
        width: 100%;
        
        }
       
    }   
`



export const GraficoImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 400.21px;
    height: 212px;
    /* width: 100%; */
    /* height: 90%; */
    color: white;
    gap: .5rem;
    
    img{
        width: 100%;
    }
    h3{
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 135%;
    }
    p{
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
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
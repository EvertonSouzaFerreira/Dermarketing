import styled from "styled-components";


export const ContainerTrabalhos = styled.div`
    display: flex;
    max-width: 100vw;
    height: 100vh;
    color: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    .fundoTitulo{
        display: flex;
        width: 100%;
        
    }
    
    h4{
        text-align: center;
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        span{
            color: #E4B528;
        }
    }
    button{
            width: 366px;
            height: 52px;
            background: #101010;
            border: none;
            border-radius: 24.3624px;
            color: #F3F3F3;
            cursor: pointer;
            font-family: 'Source Sans 3';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            border: 0.738255px solid #CCA42D;
            :hover{
                color: #CCA42D;
            }
        }

`

export const ContainerCardsTrabalhos = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: center;
    gap: 2rem;
    
    img{
        width: 282px;
        height: 175px;
        border-radius: 6px;
    }

    .containerCardTrabalho{
        max-width: 375px;
        text-align: center;
    
        h5{
            font-family: 'Source Sans 3';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 120%;
            color: #E4B528;
        }

        p{
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 150%;
            color: #DFDFDF;

        }
    }
`
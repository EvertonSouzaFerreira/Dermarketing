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

    @media (max-width: 920px){
            height: fit-content;
            margin-top: 6rem;
            gap: 1rem;
            /* border: solid 3px red; */
        }

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
            background: #0051FF;
            border: none;
            border-radius: 24.3624px;
            color: #F3F3F3;
            cursor: pointer;
            font-family: 'Source Sans 3';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            :hover{
              background: #2469FF;
            }


            @media (max-width: 920px){
                width: 251.6px;
                height: 48.64px;
                }
        }

`

export const ContainerCardsTrabalhos = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 920px){
            flex-wrap: wrap;
            gap: 5rem;
            
        }
    
    img{
        width: 282px;
        height: 175px;
        border-radius: 6px;
        @media (max-width: 920px){
            width: 266px;
            height: 164px;
        }
    }

    .containerCardTrabalho{
        max-width: 375px;
        text-align: center;
        
        @media (max-width: 920px){
            display: flex;
            flex-direction: column;
            align-items: center;
           
        }
        h5{
            font-family: 'Source Sans 3';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 120%;
            color: #E4B528;

            @media (max-width: 920px){
                width: 347px;
                height: 22px;
                font-size: 18px;
                
        }
        }

        p{
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 150%;
            color: #DFDFDF;

            @media (max-width: 920px){
                width: 313.33px;
                height: 80px;
                font-size: 13px;
                
        }

        }
    }
`
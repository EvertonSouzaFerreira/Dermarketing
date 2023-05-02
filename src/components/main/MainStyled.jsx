import styled from "styled-components";

//imgs
import fundoDescricao from '../../images/fundoPreto.jpg'

export const ContainerMain = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    color: #F3F3F3;
    background-image: url(${fundoDescricao});
    font-family: 'Source Sans 3', sans-serif;
    @media (max-width: 768px){
            width: 100%;
            height: fit-content;
            padding-top: 5rem;
            display: flex;
            
            
            /* border: solid 5px yellow; */
        }
    
    .img{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 532px;
        height: 617px;

        @media (max-width: 920px){
            width: 100%;
            height: 60%;
            align-content: center;
            justify-items: center;
        }

       
    }

    .container-descricao{
        display: flex;
        justify-items: center;
        align-items: center;
        padding: 107px 68px;
        /* background-image: url(${fundoDescricao}); */

        @media (max-width: 920px){
            padding: 10px;
        }

        @media (max-width: 768px){
            width: 100%;
            font-weight: 600;
            font-size: 20px;
            line-height: 125%;
            /* or 25px */
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          
        }
    }
    .descricao{
        max-width: 640px;
        font-weight: 300;
        font-size: 28px;
        line-height: 200%;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        @media (max-width: 768px){
            font-size: 12px;
            gap: 3rem;
            
        }
        
        span{
            color:#EEC65F;

        }
        p{
            font-weight: 400;
            font-size: 20px;
            line-height: 150%;

            @media (max-width: 768px){
            font-size: 11px;
            max-width: 279px;
            margin: auto;
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

            @media (max-width: 768px){
            margin: auto;
            width: 207px;
            height: 43px;
            font-family: 'Source Sans 3';
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            line-height: 26px;
            padding: 10px 28px;
            border: none;
            margin-bottom: 5rem;
            /* identical to box height */

            display: flex;
            align-items: center;

            /* Branco */

            color: #DFDFDF;
            cursor: pointer;

            /* Blue */

            background: #0051FF;
            border-radius: 21px;
        }
        }
    }
`
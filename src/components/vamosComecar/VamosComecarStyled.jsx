import styled from "styled-components";

import fundoDescricao from '../../images/fundoPreto.jpg'

export const ContainerVamosComecar = styled.div`
    display: flex;
    max-width: 100vw;
    height: 100vh;
    color: white;
    /* flex-direction: column; */
    align-items: center;
    justify-content: space-evenly;
    /* background-image: url(${fundoDescricao}); */
    background-size: contain;

    .container{

    width: 90%;
    height: 90%;
    display: flex;
    color: white;
    
    /* flex-direction: column; */
    align-items: center;
    justify-content: space-evenly;
    background-image: url(${fundoDescricao});
    background-size: contain;

    @media (max-width: 920px) {
        width: 100%;
    }

    .imgDoctor  {
            max-height: 100%;
            max-width: 100%;
        }    
    }

    @media (max-width: 920px){
        margin-top: 5rem;
        height: fit-content;
        /* background-image: none; */
       
        .imgDoctor  {
            display: none;
        }                 
        }

    .containertitle{
        display: flex;
        flex-direction: column;
        width: 419px;
        height: 150px;
        gap: 1rem;
        
        img{
            width: 74px;
        }

        @media (max-width: 920px){
            align-items: center;
            
            padding: 2rem;
            height: fit-content;
            h4{
                text-align: center;
                font-size: 24px;
            }
            p{
                font-size: 19px;
            }
            img{
                width: 44px;
            }
        }
    }

    h4{
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        span{
            color: #E4B528;
        }
    }
    p{
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 125%;
    }

    button{
        width: 197px;
        height: 43.39px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 28px;
        gap: 2.59px;
        border: none;
        cursor: pointer;
        background: #0051FF;
        border-radius: 21px;
        color: #DFDFDF;
        :hover{
              background: #2469FF;
            }

    }

`
import styled from "styled-components";

//imgs
import fundoDescricao from '../../images/fundoPreto.jpg'

export const ContainerMain = styled.div`
    max-width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    color: #F3F3F3;
    background-image: url(${fundoDescricao});
    font-family: 'Source Sans 3', sans-serif;

    span{
        font-family: 'Source Sans 3', sans-serif;
    }

    
    @media (max-width: 920px){
            width: 100%;
            height: fit-content;
            padding-top: 7rem;
            display: flex;
            padding-bottom: 3rem;
            
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

        @media (max-width: 920px){
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

        p{
            
        }

        @media (max-width: 920px){
            width: 279px;
            height: 264px;
            font-size: 15px;
            gap: 2.5rem;
            align-items: center;
            
            .titulo{
                width: 379px;
                height: 75px;
                font-family: 'Source Sans 3';
                font-style: normal;
                
                font-weight: 700;
                font-size: 25px;
            }
            p{
                width: 389px;
                height: 140px;
                /* border: solid red 2px; */
                font-family: 'Source Sans 3';
                
                font-weight: 400;
                font-size: 18px;
                
            }

            /* h2{
                width: 279px;
                height: 75px;
                font-family: 'Source Sans 3';
                font-style: normal;
                font-weight: 300;
                font-size: 12px;
                
                border: solid red 3px;

            } */
            
        }
        
        span{
            color:#E4B528;
            
        }
        h1{
            max-width: 545px;
            
            font-weight: 600;
            font-size: 40px;
            line-height: 125%;
        }
        p{
            font-weight: 400;
            font-size: 20px;
            line-height: 150%;
            max-width: 540px;
            @media (max-width: 920px){
            font-size: 15px;
            width: 379px;
            
            font-family: 'Source Sans 3';
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
            a{
                color: #F3F3F3;
                
                padding: 1rem 6rem;
            }

           
            :hover{
              background: #2469FF;
            }


            @media (max-width: 920px){
            margin: auto;
            width: 157px;
            height: 30px;
            font-family: 'Source Sans 3';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 18px;
            padding: 10px 18px;
            border: none;
            margin-bottom: 5rem;
            display: flex;
            
            justify-content: center;
            /* identical to box height */

            display: flex;
            align-items: center;

            /* Branco */

            color: #DFDFDF;
            cursor: pointer;
            
            a{
               
                padding: 0 ;
            }
        
        }
        }
    }
`
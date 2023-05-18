import styled from "styled-components";
import { keyframes, css } from 'styled-components'


const moveFromLeft = keyframes`
from {
    /* width: 0; */
    opacity: 0;
    transform: scaleX(0);
  }
  to {
    /* width: 410px; */
    opacity: 1;
    transform: scaleX(1);
  }
`;

const move = keyframes`
   0% {
    transform: translateY(-155px) scaleY(1);
    opacity: 1;
  }
  100% {
    transform: translateY(305px) scaleY(0);
    opacity: 0;
  }
`;


export const ContainerVantagens = styled.div`
    max-width: 100vw;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #171717;
    padding-top: 3rem;

    @media (max-width: 920px){
            height: fit-content;
            margin-top: 3rem;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
            /* margin-bottom: 5rem; */
            padding-top: 3rem;
            padding-bottom: 3rem;
            /* border: solid 3px red; */
        }

    .containerBtnTitulo{
        display: flex;
        width: 492px;
        height: 70%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        /* background-color: red; */

        @media (max-width: 920px){
            height: fit-content;
            
            gap: 1rem;
            /* border: solid 3px red; */

            h4{
                color: #E4B528;
            }

        }
    }

    h4{
        
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        color: #FFFFFF;
        
        span{
            font-family: 'Source Sans 3';
            color: #E4B528;
        }
        @media (max-width: 920px){
            width: 362px;
            height: 50px;
            font-size: 20px;
            line-height: 125%;
            text-align: center;
        }
    }

    button{
            width: 366px;
            height: 42px;
            background: #101010;
            border: none;
            border-radius: 24px;
            color: #DFDFDF;
            cursor: pointer;
            font-family: 'Source Sans 3';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            border: 0.738255px solid #CCA42D;
            :hover{
                color: #CCA42D;
            }

            @media (max-width: 920px){
                width: 269.29px;
                height: 38.26px;
                padding: 0px 5px;
                border-radius: 17px;

        }
        }

        ul{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            height: 70%;
            /* width: 40%; */
            width: 510px;
            /* background-color: #CCA42D; */
            gap: 1rem;
            
           
            
            @media (max-width: 920px){
                width: 290px;
                height: 334px;
                align-items: center;
                padding: 0px;
                gap: 1rem;
                /* border: solid 3px blue; */
        }
            .containerLi{
                display: flex;
                position: relative;
                align-items: center;
                justify-content: center;
                /* border: solid 3px red; */
                width: 100%;
                height: 85px;
                img{
                    position: absolute;
                    z-index: 1;
                    left: 0;
                    transform: translate(-50% -50%);
                    width: 80px;
                    height: 80px;
                    @media (max-width: 920px){
                        width: 50px;
                        height: 50px;
                    }
                }
            }

            li{
                display: flex;
                align-items: center;
                overflow: hidden;
                justify-content: center;
                gap: 1rem;
                width: 450px;
                height: 65px;
                background: #262626;
                border-radius: 44px;
                color: #FFFFFF;
                transform-origin: left;
                box-shadow: 8px 4px 21px rgba(0, 0, 0, 0.5);
                /* animation: ${moveFromLeft} 1s ease-in-out; */
                animation: ${({ isInView }) =>isInView ? css `${moveFromLeft} 1.5s ease-in-out` : "none"};
                
                
                @media (max-width: 920px){
                width: 100%;
                height: 41px;
                justify-content: flex-end;
                align-items: flex-end;
                gap: .5px;
                    
                    p{
                        width: 200px; 
                        
                    }

                }

               
                    img{
                        height: 93px;
                        @media (max-width: 920px){
                                width: 50px;
                                height: 50px;
                                
                            }
                    }
                
                    p{
                        width: 301px;
                        height: 31px;
                        font-weight: 600;
                        font-size: 24px;
                        line-height: 125%;
                        @media (max-width: 920px){
                            font-size: 14px;
                            width: 201px;
                            
                            }
                        
                    }
                
            }
        }

        .errow{
            width: 20%;
            height: 70%;
            /* background: red; */
            
            display: flex;
            /* border: solid red 3px; */
            justify-content: flex-start;
            align-items: flex-start;
            /* transform-origin: bottom center; */
            animation: ${move} 2s infinite linear;
            
        }

`
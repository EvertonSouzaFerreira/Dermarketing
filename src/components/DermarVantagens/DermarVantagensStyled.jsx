import styled from "styled-components";

import { keyframes, css } from 'styled-components'



const moveFromLeft = keyframes`
from {
  transform: translateX(-100%);
}
to {
  transform: translateX(0);
}
`;

const moveFromRight = keyframes`
from {
  transform: translateX(100%);
}
to {
  transform: translateX(0);
}
`;


export const ContainerDermaVantagens = styled.div`
     display: flex;
    color: #DFDFDF;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100vw;
    /* height: 100vh; */
    /* max-height: 100vh; */
    gap: 2rem;
    padding: 32px 40px;
    background: none;
    .cards{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
            justify-content: center;
        gap: 1rem;

        @media (max-width: 920px){
            gap: .5rem;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            height: 100%;
        }

    }


    .fundoTitulo{
        display: flex;
        width: 100%;
        
    }
    
    h5{
        
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 135%;
        span{
            color: #E4B528;
        }
    }

    button{
            width: 366px;
            height: 42px;
            background: #101010;
            border: none;
            border-radius: 24.3624px;
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
        }
`

export const Card = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 16px 48px; */
  gap: .1px;
  width: 355px;
  height: 267px;
  cursor: pointer;
  /* Box Defaut */
  background: #121212;
  /* Sombra */
  box-shadow: 8px 4px 21px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  animation: ${({ isInView }) =>isInView ? css `${moveFromLeft} 0.7s ease-in` : "none"};

  &.card2 {
    animation: ${({ isInView }) =>isInView ? css`${moveFromRight} 0.8s ease-in` : "none"};
    
  }
    
    h2{
        width: 318px;
        /* height: 75px; */
        background: #121212;
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        color: #EEC65F;
        background: none;
        text-align: center;
    }

    p{
        width: 220px;
        /* height: 98px; */
        background: #121212;
        color: white;
        text-align: center;
        background: none;
        line-height: 150%;
    }
    :hover{
        background: #272727;
    }

    @media (max-width: 920px){
        width: 355px;
        height: 267px;
        padding: 8px 24px;
        }
`
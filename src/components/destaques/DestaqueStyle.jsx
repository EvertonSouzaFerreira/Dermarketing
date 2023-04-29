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

export const ContainerDestaques = styled.div`
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100vw;
    height: 100vh;
    height: 100vh;
    gap: 5rem;
    padding: 32px 40px;
    background: none;
    .cards{
        display: flex;
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
    
    h4{
        
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        span{
            color: #E4B528;
        }
    }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 48px 48px;
  gap: 2px;
  width: 355px;
  height: 305px;
  cursor: pointer;
  border: 1px solid #E4B528;
/* Sombra */

  filter: drop-shadow(8px 4px 21px rgba(0, 0, 0, 0.5));
  border-radius: 12px;
  box-shadow: 8px 4px 21px rgba(0, 0, 0, 0.5);
  animation: ${({ isInView }) =>isInView ? css `${moveFromLeft} 0.7s ease-in` : "none"};

  &.card2 {
    animation: ${({ isInView }) =>isInView ? css`${moveFromRight} 0.8s ease-in` : "none"};
    
  }
    
    h2{
        width: 318px;
        height: 75px;
        margin-left: auto;
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        color: #DCDBDB;
        
        
    }

    p{
        width: 250px;
        height: 98px;
        background: #121212;
        color: white;
        
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
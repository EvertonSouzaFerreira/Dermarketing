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





export const ContainerCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 94vh;
    gap: 5rem;
    padding: 32px 40px;
    background: none;
    .cards{
        display: flex;
        gap: 42px;


        .card1{
            
            
            }
        .card2{
            
            }
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
            background: none;
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
         
`


export const Card = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 48px 48px;
  gap: 8px;
  width: 355px;
  height: 267px;
  cursor: pointer;
  /* Box Defaut */
  background: #121212;
  /* Sombra */
  box-shadow: 8px 4px 21px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  animation: ${({ isInView }) =>isInView ? css `${moveFromLeft} 0.5s ease-in` : "none"};

  &.card2 {
    animation: ${({ isInView }) =>isInView ? css`${moveFromRight} 0.5s ease-in` : "none"};
    
  }
    
    h2{
        width: 318px;
        height: 75px;
        background: #121212;
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        color: #EEC65F;
        background: none;
    }

    p{
        width: 220px;
        height: 98px;
        background: #121212;
        color: white;
        text-align: center;
        background: none;
        
    }
    :hover{
        background: #272727;
    }

    
    
`


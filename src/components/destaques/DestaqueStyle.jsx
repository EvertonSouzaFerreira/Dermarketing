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
    gap: 5rem;
    /* padding: 32px 40px; */
    background: none;
    
    @media (max-width: 920px){
            
            height: fit-content;
            margin-top: 10rem;
            /* padding-left: 2rem; */
            justify-content: center;
            align-items: center;
            
            margin-bottom: 5rem;

            /* border: solid 3px red; */
    }

    .cards{
        display: flex;
        gap: 1rem;
        
        .inner{
              display: flex;
              flex-wrap: wrap;
              /* align-items: center;
              justify-content: center; */
              gap: 1rem;
              padding: 0.5rem;
            }
            .caroussel{
              cursor: default;
              padding-left: 1rem;
              overflow: visible;
            }
       
        @media (max-width: 920px){
            max-width: 410px;
            .caroussel{
              cursor: grab;
              overflow: hidden;
              
            }

            .inner{
              padding: 0.5rem;
              display: flex;
              flex-wrap: nowrap;
              flex-direction: row;
              gap: 1rem;
              
            }

        }
    }

    .fundoTitulo{
        display: flex;
        width: 100%;

        h4{
          max-width: 284px;
        }

        @media (max-width: 920px){
            width: 100vw;
            align-items: center;
            display: none;
            img{
              width: 300px;
              height: 48px;
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

        @media (max-width: 920px){
          width: 178px;
          height: 40px;
          font-size: 15px;
          line-height: 135%;
          
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
  @media (max-width: 920px) {
           animation: none;
            }
  &.card2 {
    animation: ${({ isInView }) =>isInView ? css`${moveFromRight} 0.8s ease-in` : "none"};
    
    @media (max-width: 920px) {
           animation: none;
            }
  }

  @media (max-width: 920px){
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 13px 39px 39px;
      gap: 1px;

      width: 294px;
      height: 293px;
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
        
        @media (max-width: 920px){
          width: 263px;
          height: 62px;
          font-size: 19px;
          line-height: 120%;
          margin: 0;
        }
        
    }

    p{
        width: 250px;
        height: 98px;
        background: #121212;
        color: white;
        
        background: none;
        line-height: 150%;

        @media (max-width: 920px){
          width: 263.36px;
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
        }
    }
    :hover{
        background: #272727;
    }

    
    
`
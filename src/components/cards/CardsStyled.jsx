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
    max-width: 100vw;
    height: 100vh;
    font-family: 'Source Sans 3';
    gap: 5rem;
    padding: 32px 40px;
    /* border: solid red 3px; */
   

    @media (max-width: 920px){
      height: fit-content;
            justify-content: center;
            align-items: center;
            gap: 3rem;
            

            /* border: solid 3px red; */
        }

    .cards{
        display: flex;
        gap: 1rem;
       
        @media (max-width: 920px){
            width: 100%;
            
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            padding:0;
            /* height: 100%; */
        }

        

    }

    .containerPergunta{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        
        font-family: 'Source Sans 3';
        @media (max-width: 920px){
        
        gap: 1rem;
        
        }
        
        p{
            width: 856px;
            height: 16px;
            color: #E0DEDE;
            font-family: 'Source Sans 3';
            font-style: normal;
            font-weight: 400;
            font-size: 24px; 
            
            @media (max-width: 920px){
            width: 100%;
            text-align: center;

            @media (max-width: 920px){
        
              font-size: 16px;
              
              }
        }
            
        }
        h3{
        max-width: 598px;
        height: 64px;
        text-align: center;
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        color: #E0DEDE;
        background: none;
        span{
            background: none;
            font-family: 'Source Sans 3';
            color:#E4B528;;
            font-weight: 600;
        }
        @media (max-width: 920px){
        
        font-size: 22px;
        
        }
}

        @media (max-width: 920px){
        width: 100%;
        
        }
       
    }   
`


export const Card = styled.div`
  display: flex;
  
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 48px;
  gap: 1px;
  width: 355px;
  height: 300px;
  cursor: pointer;
  /* Box Defaut */
  background: #272727;
  /* Sombra */
  box-shadow: 8px 4px 21px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  animation: ${({ isInView }) =>isInView ? css `${moveFromLeft} 0.7s ease-in` : "none"};
  @media (max-width: 920px){
       animation: none;
        }
  &.card2 {
    animation: ${({ isInView }) =>isInView ? css`${moveFromRight} 0.8s ease-in` : "none"};
    @media (max-width: 920px){
       animation: none;
        }
  }

  @media (max-width: 920px){
        width: 100%;
        height: 290px;
        gap: 1px;
        justify-content: center;
        }
    
    h2{
        width: 318px;
        height: 75px;
        background: #121212;
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        color: #E4B528;
        background: none;
        text-align: center;
        @media (max-width: 920px){
        
          width: 283.94px;
          height: 66.97px;
          font-size: 21px;
          line-height: 120%;
          gap: 7px;
        }
    }

    p{
        width: 220px;
        height: 128px;
        background: #121212;
        
        color: white;
        text-align: center;
        background: none;
        line-height: 150%;
        margin-bottom: 1rem;
        @media (max-width: 920px){
        
          width: 226.79px;
          height: 87.5px;
          font-size: 14px;
          line-height: 150%;
        
        }
    }
    :hover{
        background: #272727;
    }

    img{
      width: 64px;
      height: 34px;
      @media (max-width: 920px){
        width: 61px;
        height: 40px;
        
      
      }
    }
.posicao{
  width: 61.75px;
  height: 50.13px;
}
.destaque{
  width: 84.32px;
  height: 74px;
}
   
    
`


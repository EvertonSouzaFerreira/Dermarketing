import styled from "styled-components";

import { keyframes, css } from 'styled-components'






export const ContainerDermaVantagens = styled.div`
     display: flex;
    color: #DFDFDF;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100vw;
    height: 100%;
    /* max-height: 100vh; */
    gap: 2rem;
    /* padding: 32px 40px; */
    background: #171717;
    padding-bottom: 3rem;
    @media (max-width: 920px) {
            margin-top: 3rem;
            padding-bottom: 2rem;
            
            }

    .cards{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        max-width: 1147px;
       
        .inner{
              display: flex;
              flex-wrap: wrap;
              /* align-items: center;
              justify-content: center; */
              
              gap: 1rem;
           
            }
            .caroussel{
              cursor: default;
              overflow: visible;
              padding-left: 1rem;
              
            }
       
        @media (max-width: 920px){
            max-width: 410px;
            .caroussel{
              cursor: grab;
              overflow: hidden;
              
            }

            .inner{
              padding-left: 2.5rem;
              display: flex;
              flex-wrap: nowrap;
              flex-direction: row;
              gap: 1rem;
              
            }

        }

       

    }


    .fundoTitulo{
        display: flex;
        max-width: 100vw;
        margin-right: auto;
        
        @media (max-width: 920px) {
            img{
                /* width: 30px;
                height: 94px; */
                display: none;
               
            }

            h5{
              display: none;
                max-width: 334px;
                height: 67px;
                font-size: 18px;
                
            }
        }
        
    }
    
    h5{
        
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 135%;
        max-width: 590px;
        span{
            color: #E4B528;
        }
    }

    button{
            width: 366px;
            height: 42px;
            background: #0051FF;
            border: none;
            border-radius: 24px;
            color: #DFDFDF;
            cursor: pointer;
            font-family: 'Source Sans 3';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            
            :hover{
              background: #2469FF;
            }

            @media (max-width: 920px) {
              width: 251.42px;
              height: 41.37px;
            }
        }
`

export const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  
  gap: .1px;
  width: 355px;
  height: 297px;
  cursor: pointer;
  /* Box Defaut */
  border: 1px solid #E4B528;
  /* Sombra */
  box-shadow: 8px 4px 21px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  background: #252525;
  background: none;
  div{
    gap: .5rem;
  }
  @media (max-width: 920px) {
           animation: none;
          width: 300px;
          min-height: 297px;
          justify-content: flex-start;
          padding: 1rem;
          padding-right: 2px;
          padding-top: 2rem;
            }
  
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100%; */
    
  }

  img{
    padding-left: 1rem;
  }


    
    h2{
        width: 280px;
        /* height: 75px; */
        
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        color: #EEC65F;
        
        
        padding-right: 2rem;
    }

    p{
        width: 220px;
        height: 173px;
        
        color: white;
        
        
        line-height: 150%;
    }
    

    /* @media (max-width: 920px){
        width: 355px;
        height: fit-content;
        padding: 28px 24px;
        
        } */
`
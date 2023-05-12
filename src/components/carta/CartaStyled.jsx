import styled from "styled-components";
import { keyframes, css } from 'styled-components'


const moveRotate = keyframes`
0% {
    transform: rotateY(0deg);
}
100% {
    transform: rotateY(180deg);
}
`;


export const ContainerCarta = styled.div`
        

    display: flex;
    position: relative;
    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 16px 48px; */
    
    gap: .1px;
    width: 355px;
    height: 297px;
    transform-style: preserve-3d;
    transition: all .9s;
    animation: ${({ isInView }) =>isInView ? css `${moveRotate} 1.2s ease-in forwards` : "none"};

    @media (max-width: 920px) {
        animation: none;
        transform: rotateY(180deg);
    }
    /* :hover{
       
        transform: rotateY(180deg); 
    } */




.face{
    width: 355px;
    height: 297px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: absolute;
    backface-visibility: hidden;
    
}

#front{
    
    transform: rotateY(180deg);
    
}

#back{
    /* background: #121212; */
    backface-visibility: hidden;
    box-shadow: 8px 4px 21px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
}

.flip{
    transform: rotateY('180deg');
}

`
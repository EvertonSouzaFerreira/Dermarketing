import styled from 'styled-components';

import fundoPerto from '../../images/fundoPreto.jpg'


export const ContainerHeader = styled.div`
    width: 100vw;
    height: 6vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #060606;
    color: white;
    padding: 32px 40px;
    ul{
        display: flex;
        gap: 1rem;
        
        @media (max-width: 880px){
            flex-direction: column;
            position: absolute;
            z-index: 1;
            top: 15px;
            right: 10px;
            background: #060606;
            padding: 32px 40px;
        }
        li{
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            :hover{
            color: #F9F2B7;
        }
        }
        
    }
;
`

export const MenuHamburg = styled.div`
    position: absolute;
    z-index: 1;
    top: 15px;
    right: 10px;
    color: white;
   
    :hover{
        color: #43D9AD;
    }

`
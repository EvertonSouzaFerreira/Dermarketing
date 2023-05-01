import styled from 'styled-components';

import fundoPerto from '../../images/fundoPreto.jpg'


export const ContainerHeader = styled.div`
    width: 100%;
    height: 6vh;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #060606;
    color: white;
    padding: 32px 40px;
    position: fixed;

    @media (width < 900px){
        img{
        width: 41px;
        height: 27px;
            }
    }
    

    ul{
        display: flex;
        gap: 1rem;
        align-items: center;
        position: relative;
        @media (width < 900px){
            flex-direction: column;
            position: absolute;
            z-index: 1;
            top: 15px;
            right: 10px;
            background: #060606;
            padding: 32px 40px;
        }
        button{
            width: 197px;
            height: 43.39px;
            font-family: 'Source Sans 3';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 26px;
            padding: 10px 28px;
            border: none;
            /* identical to box height */

            display: flex;
            align-items: center;

            /* Branco */

            color: #DFDFDF;
            cursor: pointer;

            /* Blue */

            background: #0051FF;
            border-radius: 21px;
    }
        li{
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            cursor: pointer;
            :hover{
            color: #F9F2B7;
        }

        a{
            text-decoration: none;
            color: white;
        }
        a:visited{
            color: white;
            :hover{
            color: #F9F2B7;
        }
        }
        }
        
    }
;
`

export const MenuHamburg = styled.div`
    position: absolute;
    font-size: 30px;
    cursor: pointer;
    z-index: 2;
    top: 50%;
    transform: translate(-50%, -50%);
    right: 20px;
    color: white;
   
    :hover{
        color: #F9F2B7;
    }

`
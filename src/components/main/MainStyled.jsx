import styled from "styled-components";

//imgs
import fundoDescricao from '../../images/fundoPreto.jpg'

export const ContainerMain = styled.div`
    max-width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    color: #F3F3F3;
    background-image: url(${fundoDescricao});
    font-family: 'Source Sans 3', sans-serif;
    
    .img{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 532px;
        height: 617px;

        @media (max-width: 920px){
            width: 100%;
            height: 60%;
        }
    }

    .container-descricao{
        display: flex;
        justify-items: center;
        align-items: center;
        padding: 107px 68px;
        background-image: url(${fundoDescricao});

        @media (max-width: 920px){
            padding: 10px;
        }
    }
    .descricao{
        max-width: 640px;
        font-weight: 400;
        font-size: 28px;
        line-height: 200%;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        span{
            color:#EEC65F;

        }
        p{
            font-weight: 400;
            font-size: 20px;
            line-height: 150%;
        }

        button{
            width: 366px;
            height: 52px;
            background: #101010;
            border: none;
            border-radius: 24.3624px;
            color: #F3F3F3;
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
    }
`
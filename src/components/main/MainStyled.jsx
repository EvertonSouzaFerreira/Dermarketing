import styled from "styled-components";

//imgs
import fundoDescricao from '../../images/fundoPreto.jpg'

export const ContainerMain = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    color: #F3F3F3;
    font-family: 'Source Sans 3', sans-serif;
    img{
        width: 100%;
        height: 100%;
    }
    .container-descricao{
        display: flex;
        justify-items: center;
        align-items: center;
        padding: 107px 68px;
        background-image: url(${fundoDescricao});
    }
    .descricao{
        max-width: 540px;
        
        display: flex;
        flex-direction: column;
        gap: 1rem;

        span{
            color:#EEC65F;

        }
        button{
            width: 192.93px;
            height: 48.05px;
            background: #9D7417;
            border: none;
            border-radius: 8px;
            color: #F3F3F3;
            :hover{
                background: #785B19;
            }
        }
    }
`
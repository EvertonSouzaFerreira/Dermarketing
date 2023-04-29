import styled from "styled-components";


export const ContainerIdentidade = styled.div`
    display: flex;
    color: #DCDBDB;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100vw;
    height: 100vh;
    gap: 5rem;

    .containerImgDescription{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 5rem;
        img{
            width: 532px;
            height: 243px;
        }

        .descricao{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            max-width: 540px;

        }
        .imgs{
            width: 532px;
        }
    }



    .fundoTitulo{
        display: flex;
        width: 100%;
        
    }
    
    h5{
        
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 135%;
        span{
            color: #E4B528;
        }
    }

    button{
            width: 366px;
            height: 42px;
            background: #101010;
            border: none;
            border-radius: 24.3624px;
            color: #DFDFDF;
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
`
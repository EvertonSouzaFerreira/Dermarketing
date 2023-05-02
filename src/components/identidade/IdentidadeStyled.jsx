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

    @media (max-width: 768px) {
        height: fit-content;
    }

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

        @media (max-width: 768px) {
            flex-wrap: wrap;
            align-items: center;
            text-align: center;
            .imgs{
                width: 100%;
                height: fit-content;

                img{
                    width: 322px;
                    height: 184px;
                }
            }

            .descricao{
                width: 327px;
                height: 308px;
                gap: 24px;
                text-align: center;
                align-items: center;
                justify-content: center;
                h5{
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 135%;
                }
                
                p{
                    font-weight: 700;
                    font-size: 11px;
                    line-height: 150%;
                }

                button{
                    width: 280px;
                    height: 31px;
                }
            }
        }
    }



    .fundoTitulo{
        display: flex;
        width: 100%;

        @media (max-width: 768px) {
            img{
                width: 30px;
                height: 71px;
            }

            h5{
                width: 334px;
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
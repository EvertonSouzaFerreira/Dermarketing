import styled from "styled-components";


export const ContainerIdentidade = styled.div`
    display: flex;
    color: #DCDBDB;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100vw;
    height: fit-content;
    gap: 5rem;
    padding-top: 1rem;
    
    @media (max-width: 920px) {
        min-height: fit-content;
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
        @media (max-width: 920px) {
            flex-direction: column-reverse;
        }

        .descricao{
            display: flex;
            height: 500px;
            flex-direction: column;
            justify-content: center;
           
            gap: 2rem;
            max-width: 540px;
            h5{
                width: 510px;
                height: 112px;
                font-family: 'Source Sans 3';
                color: #E4B528;
                line-height: 135%;
                font-weight: 700;
                font-size: 24px;
            }

            p{
                width: 540.07px;
                height: 120px;

                font-family: 'Source Sans 3';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 150%;
            }

        }
        .imgs{
            width: 532px;
        }

        @media (max-width: 920px) {
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

                @media (max-width: 920px) {
                    width: 327px;
                    height: fit-content;
                    
                    gap: 4rem;

                    button{
                        display: none;
                    }
                    h5{
                        width: 311.22px;
                        height: 94px;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 135%;
                    }
                    p{
                        width: 327px;
                        height: 120px;

                        font-family: 'Source Sans 3';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 13px;
                        line-height: 150%;
                        /* or 20px */

                        display: flex;
                        align-items: center;
                        text-align: center;

                        /* Branco */

                        color: #DFDFDF;
                    }
                 }
            }
        }
    }



    .fundoTitulo{
        display: flex;
        width: 100%;
        font-family: 'Source Sans 3';
       
        @media (max-width: 920px) {
            img{
                width: 30px;
                height: 71px;
                display: none;
            }

            h5{
                width: 334px;
                height: 67px;
                font-size: 18px;
                display: none;
            }
        }
        
    }
    
    h5{
        
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 135%;
        
    }

    button{
            width: 366px;
            height: 42px;
            background: #0051FF;
            border: none;
            border-radius: 24.3624px;
            color: #DFDFDF;
            cursor: pointer;
            font-family: 'Source Sans 3';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            :hover{
              background: #2469FF;
            }

        }
`
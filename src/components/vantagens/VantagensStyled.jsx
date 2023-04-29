import styled from "styled-components";


export const ContainerVantagens = styled.div`
    max-width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* background: blue; */
    .containerBtnTitulo{
        display: flex;
        width: 492px;
        height: 70%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        /* background-color: red; */
    }

    h4{
        
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        color: #FFFFFF;
        
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

        ul{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            height: 70%;
            width: 40%;
            /* background-color: #CCA42D; */
            gap: 2.5rem;


            li{
                display: flex;
                align-items: center;
                gap: 1rem;
                width: 410px;
                height: 65px;
                background: #262626;
                border-radius: 44.1969px;
                color: #FFFFFF;

                span{
                    display: flex;
                    
                    img{
                        height: 93px;
                    }
                }
            }
        }

        .errow{
            width: 20%;
            height: 70%;
            /* background: red; */
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
        }

`
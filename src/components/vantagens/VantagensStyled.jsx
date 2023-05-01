import styled from "styled-components";


export const ContainerVantagens = styled.div`
    max-width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* background: blue; */


    @media (max-width: 768px){
            height: fit-content;
            margin-top: 10rem;
            flex-wrap: wrap;
            justify-content: center;
            align-items: flex-start;
            
            margin-bottom: 5rem;
        }

    .containerBtnTitulo{
        display: flex;
        width: 492px;
        height: 70%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        /* background-color: red; */

        @media (max-width: 768px){
            height: 0;
            margin-bottom: 5rem;
            gap: 3rem;
        }
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
        @media (max-width: 768px){
            width: 362px;
            height: 50px;
            font-size: 20px;
            line-height: 125%;
            text-align: center;
        }
    }

    button{
            width: 366px;
            height: 42px;
            background: #101010;
            border: none;
            border-radius: 24px;
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

            @media (max-width: 768px){
                width: 269.29px;
                height: 38.26px;
                padding: 0px 5px;
                border-radius: 17px;

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

            @media (max-width: 768px){
                width: 290px;
                height: 334.22px;
                align-items: center;
                padding: 0px;
                gap: 1rem;

        }

            li{
                display: flex;
                align-items: center;
                gap: 1rem;
                width: 410px;
                height: 65px;
                background: #262626;
                border-radius: 44.1969px;
                color: #FFFFFF;

                @media (max-width: 768px){
                width: 268px;
                height: 41px;
                justify-content: space-between;
                
                gap: .5px;

                }

               
                    img{
                        height: 93px;
                        @media (max-width: 768px){
                                width: 50px;
                                height: 50px;
                                
                            }
                    }
                
                    p{
                        width: 171px;
                        height: 21px;
                        font-size: 14px;
                        line-height: 125%;
                        
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
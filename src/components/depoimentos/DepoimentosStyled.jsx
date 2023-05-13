import styled from "styled-components";

export const ContainerDepoimentos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    width: 100%;
    height: 100vh;
    /* height: 556px; */

    @media (max-width: 920px){
        margin-top: 3rem;
        height: fit-content;
        padding-top: 1rem;
    }

    
    .titulo{
        width: 598px;
        height: 21px;
        text-align: center;
        color: #E4B528;
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 135%;

        @media (max-width: 920px){
            width: 260px;
            height: 25px;
            font-weight: 600;
            font-size: 20px;
            line-height: 125%;
    }
    }
    
    h5{
        width: 260px;
        height: 25px;
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 125%;
        color: #FFFFFF;
    }

    .cards{
        display: flex;
        flex-direction: column;
        

        .inner{
              display: flex;
              flex-wrap: wrap;
              /* align-items: center;
              justify-content: center; */
              gap: 1rem;
              width: 100%;
            }
            .caroussel{
              cursor: default;
              overflow: visible;
            }
       
        @media (max-width: 920px){
            max-width: 410px;
            margin-right: 3rem;
            .caroussel{
              cursor: grab;
              overflow: hidden;
              
            }

            .inner{
              padding-left: 2.5rem;
              display: flex;
              flex-wrap: nowrap;
              flex-direction: row;
              gap: 1rem;
              
            }

        }

        /* .ultimoCard{
            width: 200px;
            z-index: 6;
            border: solid red 2px;
        } */



        .card{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 320px;
            height: 500px;
            background: #121212;
            border-radius: 6px;
            padding: 1rem;
            gap: 1rem;
            p{
                width: 260px;
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 34px;
                text-align: center;

                color: #FFFFFF;
            }

            .containerAvatar{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                h5{
                    text-align: center;
                   
                    width: 100%;
                    height: 23px;
                }
                img{
                    width: 60px;
                    height: 60px;
                }

                p{
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.6);

                }
            }
        }
    }
`
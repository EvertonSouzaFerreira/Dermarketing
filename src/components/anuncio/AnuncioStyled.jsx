import styled from "styled-components";


export const ContainerAnuncio = styled.div`
    display: flex;
    color: white;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    max-width: 100vw;
    height: 100vh;
    background: #171717;
    gap: 8rem;
    /* padding: 1rem; */
    @media (max-width: 920px) {
            gap: 5rem;
            padding-top: 3rem;
            padding-bottom: 3rem;
            height: max-content;
            margin-top: 5rem;
            }



    .fundoTitulo{
        display: flex;
        width: 100%;
        flex-direction: row-reverse;
        
        img{
            transform: rotate(180deg);
        }

        .alinhamentoRight{
            text-align: right;

            span{
                color: #E4B528;
               
                
            }
        }

        @media (max-width: 920px) {
            align-items: center;
            justify-content: center;
            
            img{
                display: none;
            }

            h5{
                
                width: 356px;
                height: 94px;
                font-size: 20px;
                
            }
            .alinhamentoRight{
            text-align: center;
            display: flex;
            flex-direction: column;
        }
        }
    }

    
    
    h5{
       
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        
        span{
            color: #E4B528;
        }
    }

    .containerDescriptionImgGoogle{
        display: flex;
        position: relative;
        width: 100%;
        align-items: center;
        justify-content: center;
    
        @media (max-width: 920px) {
                
                flex-direction: column;
                gap: 1rem;
                
            }
        
        .decription{
            min-width: 100%;
            height: 270px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: #121212;
            padding-left: 8rem;
            
           

            h5{
                max-width: 250px;
                
            }

            img{
                width: 27px;
                height: 23px;
            }
            @media (max-width: 920px) {
                width: 284px;
                height: 91px;
                align-items: center;
                justify-content: flex-start;
                background: none;
                padding: 0;
                gap: .5rem;
                h5{
                    width: 234px;
                    height: 40px;
                    font-size: 20px;
                    text-align: center;
                    
                }
            }
            
        }

        .imgGoogle{
            position: absolute;
            right: 40px;
            
        }

        @media (max-width: 920px) {
            img{
               
            }

            h5{
                
            }

            .imgGoogle{
                position: relative;
                right: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    width: 348.44px;
                    height: 182px;
                }
            }
        }
        
    }
`
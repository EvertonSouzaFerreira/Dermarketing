import styled from "styled-components";


export const ContainerAnuncio = styled.div`
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100vw;
    height: 100vh;
    
    gap: 10rem;
    
    @media (max-width: 768px) {
            gap: 1rem;
            
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
        }

        @media (max-width: 768px) {
            img{
                width: 30px;
                height: 71px;
            }

            h5{
                
                width: 356px;
                height: 94px;
                font-size: 15px;
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
        
        @media (max-width: 768px) {
                
                flex-direction: column-reverse;
                
                
            }
        
        .decription{
            width: 100%;
            height: 270px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            padding-left: 5rem;
            
            background: #0C0C0C;

            img{
                width: 27px;
                height: 23px;
            }
            @media (max-width: 768px) {
                width: 284px;
                height: 91px;
                align-items: center;
                justify-content: flex-start;
               
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

        @media (max-width: 768px) {
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
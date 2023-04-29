import styled from "styled-components";


export const ContainerAnuncio = styled.div`
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100vw;
    height: 100vh;
    height: 100vh;
    gap: 10rem;
    
    background: none;



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
        
        background: #E4B528;
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
        }

        .imgGoogle{
            position: absolute;
            right: 40px;
            
        }
        
    }
`
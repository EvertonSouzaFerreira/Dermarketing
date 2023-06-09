import styled from "styled-components";



export const ContainerGraficos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    height: 100vh;
    background: #171717;
    @media (max-width: 920px){
            padding-top: 3rem;
            height: fit-content;
            margin-top: 2rem;
            gap: .5rem;
            /* background-color: red; */
            /* border: solid 5px red; */
        }

        .containerPergunta{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background: none;
        @media (max-width: 920px){
            justify-content: center;
            align-items: center;

            p{
                text-align: center;
            }
        }
        p{
            width: 856px;
            height: 16px;
            color: #E0DEDE;
            font-family: 'Source Sans 3';
            font-style: normal;
            font-weight: 400;
            font-size: 24px; 
            
            @media (max-width: 920px){
                width: 285px;
                height: 31px;

                font-family: 'Source Sans 3';
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                line-height: 135%;
        }
            
        }
        h3{
            width: 100%;
            height: 64px;
            text-align: center;
            font-family: 'Source Sans 3';
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            color: #E0DEDE;
            background: none;
        span{
            background: none;
            text-decoration: underline;
            text-decoration-color:#E4B528;
            font-weight: 600;
        }
        
        
}

@media (max-width: 920px){
            h3{
                width: 223px;
                height: 98px;
                
                font-family: 'Source Sans 3';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 135%;

            }
        } 
       
    }   

    .containerGrafico{
    display: flex;
    gap: .5rem;
    justify-content: center;
    align-items: center; 
    

    @media (max-width: 920px){
        width: 346.74px;
        height: 100%;
        
        flex-wrap: wrap;
        align-items: flex-start;
        } 
    
    }
`



export const GraficoImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 400px;
    height: 212px;
    /* width: 100%; */
    /* height: 90%; */
    color: white;
    gap: .5rem;
   /* background-color: #EEC65F; */
   @media (max-width: 920px){
            width: 346px;
            height: fit-content; 
            padding: 8px;
            gap: 2px;
            
        }
    
    img{
        width: 100%;
    }
    h3{
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 135%;

        @media (max-width: 920px){
            width: 160px;
            height: 27px;
            font-size: 19px;
            text-align: center;
        }
    }
    p{
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;

        @media (max-width: 920px){
            width: 282px;
            height: 19px;
            font-size: 12px;
            text-align: center;
        }
        
    }
    h4{
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 125%;
        color: #E4B528;

        @media (max-width: 920px){
            width: 222.81px;
            text-align: center;
            height: 31px;
            font-size: 24px;
            margin-top: 1rem;
        }
    }
`
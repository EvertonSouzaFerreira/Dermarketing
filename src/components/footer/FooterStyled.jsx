import styled from "styled-components";

export const ContainerFooter = styled.div `
    width: 100vw;
    height: 369px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    background: #121212;
    color: #DFDFDF;

    @media (max-width: 920px) {
        
    }

    .containerMarcaLogo{
        display: flex;
        flex-direction: column;
        width: 474px;
        height: 238px;
        justify-content: space-between;
        /* align-items: flex-start; */
        font-family: 'Source Sans 3';
        font-style: normal;
        font-weight: 400;
        font-size: 13.5506px;
        line-height: 150%;
        /* background: red; */
        .imgLogo{
            width: 204px;
            height: 19px;
        }

        .containerLogos{
            display: flex;
            gap: 2rem;
        }
    }

    .paginas{
        display: flex;
        flex-direction: column;
        width: 114px;
        height: 238px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14.0229px;
        line-height: 16px;
 
        color: #DDDDDD;

        justify-content: space-between;

        h5{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 18.0294px;
            line-height: 21px;
        }

        ul{
            display: flex;
            flex-direction: column;
            height: 177px;
            align-items: flex-start;
            justify-content: flex-start;
            
            gap: 1rem;
        }
        
    }
    .contato{
            width: 241px;

            li{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
            } 
        }

`

export const ContainerFooterMobile = styled.div`
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    background: #121212;
    .imgNome{
        width: 160.83px;
        height: 15px;
        
    }
    .containerInfos{
        display: flex;
        height: 100%;
        gap: 3rem;
        align-items: center;
        justify-content: center;
        
        .contato{
        
            height: 122px;
            gap: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
            li{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
            }
        }
        

        /* .paginas{
            display: flex;
            flex-direction: column;
            font-family: 'Roboto';
            font-style: normal;
            color: #DDDDDD;
            justify-content: center;
            gap: 1rem;
        } */


        h5{
          font-size: 15px;
        }

        ul{
            display: flex;
            flex-direction: column;
            
            align-items: flex-start;
            justify-content: flex-start;
            
            gap: 1rem;
        }

        li{
            font-weight: 400;
            font-size: 11.8055px;
            line-height: 14px;
        } 
    }

    .containerLogos{
            
            display: flex;
            gap: 2rem;
        }
`
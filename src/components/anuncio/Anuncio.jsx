import React from 'react'

//styled
import { ContainerAnuncio } from './AnuncioStyled'

//imagens
import coroa from '../../images/coroa.png'
import anuncioGoogleImg from '../../images/anuncioGoogleImg.png'
import fundoTitulo from '../../images/fundoTitulo.png'


function Anuncio() {
  return (
    <ContainerAnuncio>
        <div className='fundoTitulo'>
                <img src={fundoTitulo} alt="" />
            <h5 className='alinhamentoRight'><span>Qual a importância do tráfego pago?</span><br/>
                É muito importante também que seu site seja <br/>
                encontrado através de anúncios feito no Google. </h5>            
        </div>
        <div className='containerDescriptionImgGoogle'>
            <div className='decription'>
                <img src={coroa} alt="coroa" />
                <h5> <span>Alcance o  primeiro lugar</span> nas pesquisas do Google </h5>
            </div>
            <div className='imgGoogle'>
                <img src={anuncioGoogleImg} alt="top1 google" />
            </div>
        </div>

    </ContainerAnuncio>
  )
}

export default Anuncio
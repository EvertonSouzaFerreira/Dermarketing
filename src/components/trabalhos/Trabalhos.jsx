import React from 'react'


//imagens
import cartoesTrabalhoJardin from '../../images/cartoesTrabalhoJardin.png'
import trabalhoJadinMulher from '../../images/trabalhoJadinMulher.png'
import simbuloMetaGoogle from '../../images/simbuloMetaGoogle.png'
import fundoTitulo from '../../images/fundoTitulo.png'

import {ContainerTrabalhos, ContainerCardsTrabalhos} from './TrabalhosStyled'

function Trabalhos() {
  return (
 
    <ContainerTrabalhos>
      {/* <div className='fundoTitulo'>
        <img src={fundoTitulo} alt="" />
      <h4>O que podemos oferecer<br/>
       <span>para você ou seu negócio?</span> </h4>
      </div>
         */}
        <ContainerCardsTrabalhos>
          <div className='containerCardTrabalho'>
          <img src={trabalhoJadinMulher} alt="" />
          <h5>WEBSITE E POSICIONAMENTO ONLINE</h5>
          <p>Um website é importante para presença online, apresentar marca e produtos, gerar leads e vendas, fornecer suporte, construir autoridade e melhorar visibilidade na busca.</p>
          </div>
          <div className='containerCardTrabalho'>
          <img src={cartoesTrabalhoJardin} alt="" />
          <h5>POSICIONAMENTO DA MARCA</h5>
          <p>Branding é importante para fortalecer a identidade da sua marca, gerar conexão emocional com os clientes, aumentar a fidelidade 
à marca, diferenciar sua marca da concorrência e aumentar as vendas e a lucratividade a longo prazo.</p>
          </div>
          <div className='containerCardTrabalho'>
          <img src={simbuloMetaGoogle} alt="" />
          <h5>GESTÃO DE TRÁFEGO</h5>
          <p>Ter um gestor de tráfego é fundamental para maximizar o retorno do investimento em marketing, melhorar as taxas de conversão, aumentar as vendas e economizar tempo e recursos.</p>
          </div>
            
            
            
        </ContainerCardsTrabalhos>
        <button>Agendar mentoria</button>
    </ContainerTrabalhos>
  )
}

export default Trabalhos
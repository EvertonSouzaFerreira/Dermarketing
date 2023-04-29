import React from 'react'


//imagens
import imagens01 from '../../images/imgIdentidadeVisual.png'
import imagens02 from '../../images/imgIdentidadeVisual2.png'
import fundoTitulo from '../../images/fundoTitulo.png'

//styled
import { ContainerIdentidade } from './IdentidadeStyled'

function Identidade() {
  return (
    <ContainerIdentidade>
        <div className='fundoTitulo'>
                <img src={fundoTitulo} alt="" />
            <h5>Mas apenas isso não basta: <br/><span>Uma identidade visual </span> bem elaborada <br/> <span>torna tudo muito mais atraente</span> </h5>            
        </div>
        <div className='containerImgDescription'>
            <div className='imgs'>
                <img src={imagens01} alt="" />
                <img src={imagens02} alt="" />
            </div>
            <div className='descricao'>
                <h5>
                   <span>Crie uma imagem forte e memorável para sua marca, conquiste a confiança e fidelidade dos  clientes</span> e aumente a percepção de valor dos seus produtos e serviços.
                </h5>
                <p>Ter uma boa identidade visual é fundamental para construir uma imagem de marca forte e impactante, que seja memorável, atraente e profissional. Uma identidade visual bem elaborada ajuda a aumentar a percepção de valor da marca, conquistar a confiança e fidelidade dos clientes e, consequentemente, gerar mais vendas. Além disso, a identidade visual deve estar presente em todos os pontos de contato com os clientes, criando uma experiência de marca consistente e coerente.</p>

                <button>Quero minha identidade visual</button>
            </div>
        </div>
    </ContainerIdentidade>
  )
}

export default Identidade
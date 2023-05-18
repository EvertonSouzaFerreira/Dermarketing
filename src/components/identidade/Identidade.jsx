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
            <h5>Mas apenas isso não basta: <br/>Uma identidade visual bem elaborada <br/> torna tudo muito mais atraente </h5>            
        </div>
        <div className='containerImgDescription'>
            <div className='imgs'>
                <img src={imagens01} alt="" />
                <img src={imagens02} alt="" />
            </div>
            <div className='descricao'>
                <h5>
                   <span>Impressione seu público-alvo com uma identidade visual irresistível! Construa uma marca memorável que conquiste a confiança e fidelidade dos clientes.</span> 
                </h5>
                <p> Uma identidade visual bem elaborada é fundamental para uma marca forte, memorável e profissional. Ela aumenta a percepção de valor, conquista a confiança e fidelidade dos clientes, impulsionando as vendas. </p>

                <button>Quero minha identidade visual</button>
            </div>
        </div>
    </ContainerIdentidade>
  )
}

export default Identidade
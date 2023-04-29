import React from 'react'

//imagens
import fundoNumero from '../../images/fundoNumero.png'
import errow from '../../images/errow.png'

import { ContainerVantagens } from './VantagensStyled'

function Vantagens() {
  return (
    <ContainerVantagens>
        <div className='containerBtnTitulo'>
            <h4>Conheça as <span>vantagens <br/>  de ter um site profissional!</span></h4>
            <button>Quero criar meu site profissional</button>
        </div>
        <ul>
            <li><span><img src={fundoNumero} alt="" /></span>Aumento da visibilidade</li>
            <li><span><img src={fundoNumero} alt="" /></span>Construção de Autoridade</li>
            <li><span><img src={fundoNumero} alt="" /></span>Atrair mais pacientes</li>
            <li><span><img src={fundoNumero} alt="" /></span>Inspiração e credibilidade</li>
            <li><span><img src={fundoNumero} alt="" /></span>Destacar-se da concorrência</li>
        </ul>

        <div className='errow'>
            <img src={errow} alt="" />
        </div>
    </ContainerVantagens>
  )
}

export default Vantagens
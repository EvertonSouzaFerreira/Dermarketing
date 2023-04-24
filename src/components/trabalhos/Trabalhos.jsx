import React from 'react'


//imagens
import cartoesTrabalhoJardin from '../../images/cartoesTrabalhoJardin.png'
import trabalhoJadinMulher from '../../images/trabalhoJadinMulher.png'
import simbuloMetaGoogle from '../../images/simbuloMetaGoogle.png'

import {ContainerTrabalhos, ContainerCardsTrabalhos} from './TrabalhosStyled'

function Trabalhos() {
  return (
    <ContainerTrabalhos>
        <h4>Mas como é possível<br/>
        alcançar essas pessoas?</h4>
        <ContainerCardsTrabalhos>
            <img src={cartoesTrabalhoJardin} alt="" />
            <img src={trabalhoJadinMulher} alt="" />
            <img src={simbuloMetaGoogle} alt="" />
        </ContainerCardsTrabalhos>
    </ContainerTrabalhos>
  )
}

export default Trabalhos
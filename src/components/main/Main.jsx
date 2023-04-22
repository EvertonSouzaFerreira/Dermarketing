import React from 'react'

//imagens
import imgWoman from '../../images/beautician-woman-clinic-consults-client 1.png'

//styled
import {ContainerMain} from './MainStyled'

function Main() {
  return (
    <ContainerMain>
        <div className='container-descricao'>
            <div className='descricao'>
            <h1>Trabalha na área da beleza? <br/>
            <span>A Dermarketing pode te ajudar
                a alcançar mais clientes.</span>
            </h1>
            <p>Somos uma agência focada apenas em especialistas voltados para a área da estética, oferecemos um trabalho de excelência atraindo mais clientes para você.</p>
            <button>Agendar mentoria</button>
            </div>
            
        </div>
        <img src={imgWoman} alt="" />
    </ContainerMain>
  )
}

export default Main
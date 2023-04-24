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
            <h1>Trabalha na área da beleza? 
            <span>A Dermarketing<br/> pode te ajudar
                a alcançar mais clientes.</span>
            </h1>
            <p>Somos uma agência focada apenas em especialistas <br/> voltados para a área da estética,<b> oferecemos um trabalho de excelência atraindo mais clientes para você.</b></p>
            <button>Agendar mentoria</button>
            </div>
        </div>
        <div className='img'>
        <img src={imgWoman} alt="" />
        </div>
        
    </ContainerMain>
  )
}

export default Main
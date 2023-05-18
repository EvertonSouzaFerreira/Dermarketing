import React, { useEffect, useState } from 'react'

//imagens
import imgWoman from '../../images/beautician-woman-clinic-consults-client 1.png'

//styled
import {ContainerMain} from './MainStyled'

function Main() {

  const [width, setWidth] = useState(false)

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 968) {
      setWidth(true)
    } else {
      setWidth(false)
    }
  }

  

  useEffect(() => {
    handleResize(); // Executa a função quando o componente é montado
    window.addEventListener('resize', handleResize); // Adiciona um listener para redimensionamento
    return () => window.removeEventListener('resize', handleResize); // Remove o listener quando o componente é desmontado
  }, []);
  
  return (
    <ContainerMain>
        <div className='container-descricao'>
            <div className='descricao'>
            <h2 className='titulo'>Trabalha na área da beleza? <br/>
            <span>A Dermarketing pode te ajudar
                a alcançar mais pacientes.</span>
            </h2>
            <p>Somos uma agência focada apenas em especialistas voltados para a área da estética,
            <b> oferecemos um trabalho de excelência atraindo mais clientes para você.</b>
            <span> Prezando por responsabilidade com a LGPD e as normas da CFM.</span></p>
            <button> <a href="https://contate.me/dermarketing">Quero mais pacientes</a></button>
            </div>
        </div>
        {!width && <div className='img'>
        <img src={imgWoman} alt="" />
        </div>}
        
    </ContainerMain>
  )
}

export default Main
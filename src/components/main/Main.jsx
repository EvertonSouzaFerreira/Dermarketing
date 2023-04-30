import React, { useEffect, useState } from 'react'

//imagens
import imgWoman from '../../images/beautician-woman-clinic-consults-client 1.png'

//styled
import {ContainerMain} from './MainStyled'

function Main() {

  const [width, setWidth] = useState(false)

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= '768px') {
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
            <h1>Trabalha na área da beleza? 
            <span>A Dermarketing<br/> pode te ajudar
                a alcançar mais pacientes.</span>
            </h1>
            <p>Somos uma agência focada apenas em especialistas voltados<br/> para a área da estética,<b> oferecemos um trabalho de excelência atraindo mais clientes para você.</b>
            <span> Prezando por responsabilidade com a LGPD e as normas da CFM.</span></p>
            <button>Quero mais pacientes</button>
            </div>
        </div>
        {width && <div className='img'>
        <img src={imgWoman} alt="" />
        </div>}
        
    </ContainerMain>
  )
}

export default Main
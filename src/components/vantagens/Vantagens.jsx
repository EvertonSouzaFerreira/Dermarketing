import React, { useEffect, useState } from 'react'

//imagens
import numero1 from '../../images/numero1.png'
import numero2 from '../../images/numero2.png'
import numero3 from '../../images/numero3.png'
import numero4 from '../../images/numero4.png'
import numero5 from '../../images/numero5.png'
import errow from '../../images/errow.png'

import { ContainerVantagens } from './VantagensStyled'

function Vantagens() {

  const [width, setWidth] = useState(false)

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 768) {
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
    <ContainerVantagens>
        <div className='containerBtnTitulo'>
            <h4>Conheça as <span>vantagens <br/>  de ter um site profissional!</span></h4>
            <button>Quero criar meu site profissional</button>
        </div>
        <ul>
            <li><img src={numero1} alt="" /><p>Aumento da visibilidade</p> </li>
            <li><img src={numero2} alt="" /><p>Construção de Autoridade</p></li>
            <li><img src={numero3} alt="" /><p>Atrair mais pacientes</p></li>
            <li><img src={numero4} alt="" /><p>Inspiração e credibilidade</p></li>
            <li><img src={numero5} alt="" /><p>Destacar-se da concorrência</p></li>
        </ul>

        {!width && <div className='errow'>
            <img src={errow} alt="" />
        </div>}
    </ContainerVantagens>
  )
}

export default Vantagens
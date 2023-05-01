import React, { useEffect, useState } from 'react'

//imagens
import fundoNumero from '../../images/fundoNumero.png'
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
            <li><img src={fundoNumero} alt="" /><p>Aumento da visibilidade</p> </li>
            <li><img src={fundoNumero} alt="" /><p>Construção de Autoridade</p></li>
            <li><img src={fundoNumero} alt="" /><p>Atrair mais pacientes</p></li>
            <li><img src={fundoNumero} alt="" /><p>Inspiração e credibilidade</p></li>
            <li><img src={fundoNumero} alt="" /><p>Destacar-se da concorrência</p></li>
        </ul>

        {!width && <div className='errow'>
            <img src={errow} alt="" />
        </div>}
    </ContainerVantagens>
  )
}

export default Vantagens
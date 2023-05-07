import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

//imagens
import numero1 from '../../images/numero1.png'
import numero2 from '../../images/numero2.png'
import numero3 from '../../images/numero3.png'
import numero4 from '../../images/numero4.png'
import numero5 from '../../images/numero5.png'
import errow from '../../images/errow.png'

import { ContainerVantagens } from './VantagensStyled'

function Vantagens() {

  const [isInView, setIsInView] = useState(false);
  
    const { ref, inView } = useInView({
        threshold: 0,
  });

    useEffect(() => {
        if (inView) {
        setIsInView(true);
        }
    }, [inView]);

    const items = [
      { id: 1, text: 'Aumento da visibilidade', delay: 0, imagem: numero1 },
      { id: 2, text: 'Construção de Autoridade', delay: 0.2, imagem: numero2 },
      { id: 3, text: 'Atrair mais pacientes', delay: 0.4, imagem: numero3 },
      { id: 4, text: 'Inspiração e credibilidade', delay: 0.6, imagem: numero4 },
      { id: 5, text: 'Destacar-se da concorrência', delay: 0.8, imagem: numero5 },
    ];

    console.log(isInView);

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
      {items.map((item) => (
        <div key={item.id} className='containerLi'>
          <img src={item.imagem} alt={`Número ${item.id}`} />
          <li
            ref={ref}
            isInView={isInView} 
            style={{ animationDelay: `${item.delay}s` }}
            
          >
            <p>{item.text}</p>
          </li>
        </div>
      ))}
    </ul>

        {!width && <div className='errow'>
            <img src={errow} alt="" />
        </div>}
    </ContainerVantagens>
  )
}

export default Vantagens
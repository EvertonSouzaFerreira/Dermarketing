import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

//imagens
import fundoTitulo from '../../images/fundoTitulo.png'

//styled
import {ContainerDestaques, Card} from './DestaqueStyle'



function Destaque() {

    const [isInView, setIsInView] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0,
  });

    useEffect(() => {
        if (inView) {
        setIsInView(true);
        }
    }, [inView]);


  return (
    <ContainerDestaques>
        <div className='fundoTitulo'>
                <img src={fundoTitulo} alt="" />
            <h4>O que faz<span> nossos<br/> sites se destacarem:</span> </h4>
            
                    
        </div>

        <div className='cards'>
        <Card ref={ref} isInView={isInView} className='card1' >
            <h2>1. Design Profissional e Personalizado
            </h2>
            <p>Nossa equipe de designers experientes cria sites personalizados e profissionais para práticas médicas, que se destacam da concorrência e atraem pacientes particulares em busca de atendimento de qualidade.

            </p>
            
        </Card>
        <Card>
            <h2>1. Design Profissional e Personalizado
            </h2>
            <p>Nossa equipe de designers experientes cria sites personalizados e profissionais para práticas médicas, que se destacam da concorrência e atraem pacientes particulares em busca de atendimento de qualidade.


            </p>
            
        </Card>
        <Card ref={ref} isInView={isInView} className='card2'>
            <h2>2. Segurança e <br/> Conformidade com CFM
            </h2>
            <p>Garantimos que nossos sites sejam seguros e atendam às normas, incluindo a LGPD e as normas do CFM. Navegação segura aumenta a credibilidade e confiança na sua prática médica.
            </p>
            
        </Card>
        </div>
    </ContainerDestaques>
  )
}

export default Destaque
import React, { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer';

import {motion} from 'framer-motion'
//imagens
import fundoTitulo from '../../images/fundoTitulo.png'

//styled
import {ContainerDestaques, Card} from './DestaqueStyle'



function Destaque() {

    const caroussel = useRef()
    const [widthScroll, setWidthScroll] = useState(0)

    useEffect(() => {
        setWidthScroll(caroussel.current?.scrollWidth - caroussel.current?.offsetWidth)
        
    },[])

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
            <h4>O que faz<span> nossos sites se destacarem:</span> </h4>          
        </div>

        <div className='cards'>
            <motion.div ref={caroussel} className='caroussel' whileTap={{cursor: 'grabbing'}}>
                <motion.div className='inner'
                drag='x'
                dragConstraints={{right:0, left: -widthScroll}}
                >
                    <Card ref={ref} isInView={isInView} className='card1' >
                        <h2>1. Design Profissional e Personalizado
                        </h2>
                        <p>Nossa equipe de designers experientes cria sites personalizados e profissionais para práticas médicas, que se destacam da concorrência e atraem pacientes particulares em busca de atendimento de qualidade.

                        </p>
                        
                    </Card>
                    <Card>
                        <h2>2. Conteúdo relevante e informativo
                        </h2>
                        <p>
                            Criamos conteúdo informativo e relevante sobre seus serviços médicos e informações importantes para pacientes. Isso melhora a experiência do paciente e aumenta a conversão de pacientes particulares.

                        </p>
                        
                    </Card>
                    <Card ref={ref} isInView={isInView} className='card2'>
                        <h2>3. Segurança e <br/> Conformidade com CFM
                        </h2>
                        <p>Garantimos que nossos sites sejam seguros e atendam às normas, incluindo a LGPD e as normas do CFM. Navegação segura aumenta a credibilidade e confiança na sua prática médica.
                        </p>
                        
                    </Card>
                </motion.div>
            </motion.div>
        
        </div>
        <button> <a href="https://contate.me/dermarketing">Quero meu site profissional</a> </button>
    </ContainerDestaques>
  )
}

export default Destaque
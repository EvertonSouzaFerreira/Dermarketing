import React, {useEffect, useState, useRef} from 'react'

import {motion} from 'framer-motion'


//styled
import { ContainerDepoimentos } from './DepoimentosStyled'

//imagens
import avatar1 from '../../images/avatar1.png'
import avatar2 from '../../images/avatar2.png'
import avatar3 from '../../images/avatar3.png'
import stars from '../../images/stars.png'

function Depoimentos() {


    const caroussel = useRef()
    const [widthScroll, setWidthScroll] = useState(0)

    useEffect(() => {
        setWidthScroll(caroussel.current?.scrollWidth - caroussel.current?.offsetWidth)
        
    },[])

  return (
    <ContainerDepoimentos>
        <h5 className='titulo'>Depoimentos de clientes!</h5>
        <div className='cards'>
            <motion.div ref={caroussel} className='caroussel' whileTap={{cursor: 'grabbing'}}>
                <motion.div className='inner'
                drag='x'
                dragConstraints={{right:0, left: -widthScroll}}
                >

                <div className='card'>
                    <p>"Ter encontrado a Dermarketing foi uma das melhores coisas para o meu consultório. Eu não sabia até então o quão necessário era o marketing para o meu negócio. Pude ver os resultados em pouco tempo. Agradeço demais a toda a equipe."</p>
                    <img src={stars} alt="" />
                    <div className='containerAvatar'>
                        <img src={avatar1} alt="" />
                        <h5>Janaina Lentz</h5>
                        <p>Dermatologista</p>
                    </div>
            </div>
            <div className='card'>
                    <p>"A princípio, recuei. Entretanto, tive que me adaptar ao mercado digital e, nisso, conheci o Lucas, um dos donos da Dermarketing. Foi incrível a experiência e posso dizer que o marketing me ajudou demais a conseguir novos pacientes!"</p>
                    <img src={stars} alt="" />
                    <div className='containerAvatar'>
                        <img src={avatar2} alt="" />
                        <h5>Patrick Reis</h5>
                        <p>Cirurgião Dentista</p>
                    </div>
            </div>
            <div className='card'>
                    <p>"Sou suspeita para falar, mas creio que ter a Dermarketing no meu consultório tem me deixado muito grata. Uma equipe focada apenas na área estética é fundamental, pois é muito difícil encontrar profissionais capacitados."</p>
                    <img src={stars} alt="" />
                    <div className='containerAvatar'>
                        <img src={avatar3} alt="" />
                        <h5>Beatriz Rossi</h5>
                        <p>Cirurgiã Plástica</p>
                    </div>
            </div>

                </motion.div>
            </motion.div>
            
        </div>
    </ContainerDepoimentos>
  )
}

export default Depoimentos
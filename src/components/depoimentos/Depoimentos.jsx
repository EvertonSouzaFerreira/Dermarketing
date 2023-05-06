import React, {useEffect, useState, useRef} from 'react'

import {motion} from 'framer-motion'


//styled
import { ContainerDepoimentos } from './DepoimentosStyled'

//imagens
import avatar1 from '../../images/avatar1.png'
import stars from '../../images/stars.png'

function Depoimentos() {


    const caroussel = useRef()
    const [widthScroll, setWidthScroll] = useState(0)

    useEffect(() => {
        setWidthScroll(caroussel.current?.scrollWidth - caroussel.current?.offsetWidth)
        
    },[])

  return (
    <ContainerDepoimentos>
        <h5>Conheça alguns depoimentos!</h5>
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
                    <p>"Ter encontrado a Dermarketing foi uma das melhores coisas para o meu consultório. Eu não sabia até então o quão necessário era o marketing para o meu negócio. Pude ver os resultados em pouco tempo. Agradeço demais a toda a equipe."</p>
                    <img src={stars} alt="" />
                    <div className='containerAvatar'>
                        <img src={avatar1} alt="" />
                        <h5>Janaina Lentz</h5>
                        <p>Dermatologista</p>
                    </div>
            </div>
            <div className='card'>
                    <p>"Ter encontrado a Dermarketing foi uma das melhores coisas para o meu consultório. Eu não sabia até então o quão necessário era o marketing para o meu negócio. Pude ver os resultados em pouco tempo. Agradeço demais a toda a equipe."</p>
                    <img src={stars} alt="" />
                    <div className='containerAvatar'>
                        <img src={avatar1} alt="" />
                        <h5>Janaina Lentz</h5>
                        <p>Dermatologista</p>
                    </div>
            </div>

                </motion.div>
            </motion.div>
            
        </div>
    </ContainerDepoimentos>
  )
}

export default Depoimentos
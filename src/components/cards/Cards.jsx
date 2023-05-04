import React, {useEffect, useState} from 'react'
import { useInView } from 'react-intersection-observer';


//style
import {ContainerCards, Card} from './CardsStyled'

//imagens
import posicao from '../../images/iconPosicoes.png'
import destaque from '../../images/iconDestaque.png'
import pacientes from '../../images/iconPacientes.png'

function Cards() {

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
    <ContainerCards id='servicos'>


        <div className='containerPergunta'>
            <h3>Como a Dermarketing <span>pode ajudar você ou
            sua empresa</span>? </h3>
        </div>
        <div className='cards'>
        <Card ref={ref} isInView={isInView} className='card1' >
            <h2>Alcance posições no google
                e fique acima da concorrência
            </h2>
            <p>Esteja nas primeiras posições
                de busca do Google para aqueles
                que já procuram pelo o seu
                serviço e conquiste mais pacientes.
            </p>
            <img src={posicao} alt="" />
        </Card>
        <Card>
            <h2>Destaque-se da<br/>
                concorrência
            </h2>
            <p>Aumente a sua autoridade e visibilidade, 
                destacando-se da concorrência com um site 
                profissional e exposição nacional.

            </p>
            <img src={destaque} alt="" />
        </Card>
        <Card ref={ref} isInView={isInView} className='card2'>
            <h2>Atraia ainda mais<br/>
                pacientes particulares
            </h2>
            <p>Por meio da gestão estratégica de 
                anúncios no Google e um site 
                personalizado, atraia os pacientes 
                certos para o seu consultório.
            </p>
            <img src={pacientes} alt="" />
        </Card>
        </div>
        
        
    </ContainerCards>
    
  )
}

export default Cards
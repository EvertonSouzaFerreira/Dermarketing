import React, {useEffect, useState} from 'react'
import { useInView } from 'react-intersection-observer';

import {ContainerCards, Card} from './CardsStyled'

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
    <ContainerCards>
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
        </Card>
        <Card>
            <h2>Alcance posições no google
                e fique acima da concorrência
            </h2>
            <p>Esteja nas primeiras posições
                de busca do Google para aqueles
                que já procuram pelo o seu
                serviço e conquiste mais pacientes.
            </p>
        </Card>
        <Card ref={ref} isInView={isInView} className='card2'>
            <h2>Alcance posições no google
                e fique acima da concorrência
            </h2>
            <p>Esteja nas primeiras posições
                de busca do Google para aqueles
                que já procuram pelo o seu
                serviço e conquiste mais pacientes.
            </p>
        </Card>
        </div>
        <div className='containerPergunta'>
        <h3>Você sabe <span>quantas pessoas estão buscando </span> <br/>
            consultas com <span>sua especialidade?</span> </h3>
            <p>Veja a média de pesquisas mensais para algumas especialidades da área de beleza:</p>
        </div>
        
    </ContainerCards>
    
  )
}

export default Cards
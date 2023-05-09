import React, {useState, useEffect} from 'react'

import { useInView } from 'react-intersection-observer';

//styled

import { ContainerCarta } from './CartaStyled'
import {Card} from '../DermarVantagens/DermarVantagensStyled'

//imagem
import numeroAzul1 from '../../images/numeroAzul1.png'
import numeroAzul2 from '../../images/numeroAzul2.png'
import numeroAzul3 from '../../images/numeroAzul3.png'
import numeroAzul4 from '../../images/numeroAzul4.png'
import numeroAzul5 from '../../images/numeroAzul5.png'
import numeroAzul6 from '../../images/numeroAzul6.png'
import logo from '../../images/SiglaLogo.png'


function Carta() {


    const cards = [
        { id: 1, title: "Alcance e Visibilidade", text: 'Aumente a sua exposição e alcance pessoas interessadas no seu serviço. O Google Ads permite que você alcance potenciais clientes no momento certo, quando estão pesquisando por soluções como as suas.', delay: 0, imagem: numeroAzul1 },
        { id: 2, title: "Segmentação Precisa", text: 'Nossa assessoria de marketing ajuda você a segmentar seu público-alvo com base em geolocalização, interesses, demografia e comportamento. Com essa segmentação, seus anúncios serão exibidos para as pessoas certas.', delay: 0.2, imagem: numeroAzul2 },
        { id: 3, title: "Controle do orçamento", text: 'O Google Ads oferece controle total do orçamento. Estabeleça um limite diário de gastos e ajuste conforme necessário. Nossa assessoria otimiza suas campanhas para maximizar o retorno sobre o investimento (ROI).', delay: 0.4, imagem: numeroAzul3 },
        { id: 4, title: "Resultados Mensuráveis", text: 'Acompanhe o desempenho de suas campanhas diariamente. Nossa assessoria de marketing fornece relatórios detalhados, permitindo que você entenda o impacto e o retorno de seus anúncios no Google.', delay: 0.6, imagem: numeroAzul4 },
        { id: 5, title: "Flexibilidade e Agilidade", text: "O Google Ads oferece flexibilidade para criar, editar e pausar campanhas conforme necessário. Nossa equipe de especialistas monitora e ajusta continuamente as campanhas para obter os melhores resultados possíveis."
        , delay: 0.8, imagem: numeroAzul5 },
        { id: 6, title: "Aumento das Conversões", text: 'Com a estratégia de anúncios certa, você verá um aumento nas conversões, como mais agendamentos de consultas. Nossa assessoria de marketing trabalha para otimizar suas campanhas e alcançar seus objetivos de negócios.', delay: 0.8, imagem: numeroAzul6 },
      ];

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
    
        
    <ContainerCarta ref={ref} isInView={isInView}>

    {cards.map((card) => {
        return(
        <Card id='carta' className='' style={{ animationDelay: `${card.delay}s` }}>
        <div className='face' id='front'>
        <Card >
            <div>
                <img src={card.imagem} alt="" />
                <h2>{card.title}</h2>
            </div>
            <p>{card.text}</p>
        </Card>
        </div>
        <div className='face' id='back'>
                <img src={logo} alt="" />
        </div>
        </Card>
        )
    })}

        
    </ContainerCarta>
        
    
  )
}

export default Carta
import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

//styled
import { ContainerDermaVantagens, Card } from './DermarVantagensStyled'

//imagens
import fundoTitulo from '../../images/fundoTitulo.png'


function DermarVantagens() {

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
    <ContainerDermaVantagens id='Derma'>
        <div className='fundoTitulo'>
        
 
                <img src={fundoTitulo} alt="" />
            <h5>Com anúncios feito no Google <br/><span>você pode alcançar muito  
                mais pacientes! </span> A Dermarketing
                te mostra as vantagens! </h5>            
        </div>
        <div className='cards'>
        <Card ref={ref} isInView={isInView} className='card1' >
            <h2>Alcance e Visibilidade
            </h2>
            <p>Aumente a sua exposição e alcance pessoas interessadas no seu serviço. O Google Ads permite que você alcance potenciais clientes no momento certo, quando estão pesquisando por soluções como as suas.
            </p>
            
        </Card>
        <Card>
            <h2>Segmentação Precisa
            </h2>
            <p>Nossa assessoria de marketing ajuda você a segmentar seu público-alvo com base em geolocalização, interesses, demografia e comportamento. Com essa segmentação, seus anúncios serão exibidos para as pessoas certas.
            </p>
            
        </Card>
        <Card ref={ref} isInView={isInView} className='card2'>
            <h2>Controle do orçamento
            </h2>
            <p>O Google Ads oferece controle total do orçamento. Estabeleça um limite diário de gastos e ajuste conforme necessário. Nossa assessoria otimiza suas campanhas para maximizar o retorno sobre o investimento (ROI).
            </p>
            
        </Card>
        <Card>
            <h2>Resultados Mensuráveis
            </h2>
            <p>Acompanhe o desempenho de suas campanhas diariamente. Nossa assessoria de marketing fornece relatórios detalhados, permitindo que você entenda o impacto e o retorno de seus anúncios no Google.
            </p>
            
        </Card>
        <Card>
            <h2>Flexibilidade e Agilidade
            </h2>
            <p>O Google Ads oferece flexibilidade para criar, editar e pausar campanhas conforme necessário. Nossa equipe de especialistas monitora e ajusta continuamente as campanhas para obter os melhores resultados possíveis.

            </p>
            
        </Card>
        <Card>
            <h2>Aumento das Conversões
            </h2>
            <p>Com a estratégia de anúncios certa, você verá um aumento nas conversões, como mais agendamentos de consultas. Nossa assessoria de marketing trabalha para otimizar suas campanhas e alcançar seus objetivos de negócios.
            </p>
            
        </Card>
        </div>

        <button>Quero atrair mais clientes</button>
    </ContainerDermaVantagens>
  )
}

export default DermarVantagens
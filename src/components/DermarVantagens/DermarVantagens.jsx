import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer';

import {motion} from 'framer-motion'
//styled
import { ContainerDermaVantagens, Card } from './DermarVantagensStyled'

//imagens
import fundoTitulo from '../../images/fundoTitulo.png'

import numeroAzul1 from '../../images/numeroAzul1.png'
import numeroAzul2 from '../../images/numeroAzul2.png'
import numeroAzul3 from '../../images/numeroAzul3.png'
import numeroAzul4 from '../../images/numeroAzul4.png'
import numeroAzul5 from '../../images/numeroAzul5.png'
import numeroAzul6 from '../../images/numeroAzul6.png'
// import Carta from '../carta/Carta';
import logo from '../../images/SiglaLogo.png'
import { ContainerCarta } from '../carta/CartaStyled';



function DermarVantagens() {

    const [width, setWidth] = useState(false)

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 920) {
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

    const cards = [
        { id: 1, title: "Alcance e Visibilidade", text: 'Aumente a sua exposição e alcance pessoas interessadas no seu serviço. O Google Ads permite que você alcance potenciais clientes no momento certo, quando estão pesquisando por soluções como as suas.', delay: 0, imagem: numeroAzul1 },
        { id: 2, title: "Segmentação Precisa", text: 'Nossa assessoria de marketing ajuda você a segmentar seu público-alvo com base em geolocalização, interesses, demografia e comportamento. Com essa segmentação, seus anúncios serão exibidos para as pessoas certas.', delay: 0.2, imagem: numeroAzul2 },
        { id: 3, title: "Controle do orçamento", text: 'O Google Ads oferece controle total do orçamento. Estabeleça um limite diário de gastos e ajuste conforme necessário. Nossa assessoria otimiza suas campanhas para maximizar o retorno sobre o investimento (ROI).', delay: 0.4, imagem: numeroAzul3 },
        { id: 4, title: "Resultados Mensuráveis", text: 'Acompanhe o desempenho de suas campanhas diariamente. Nossa assessoria de marketing fornece relatórios detalhados, permitindo que você entenda o impacto e o retorno de seus anúncios no Google.', delay: 0.6, imagem: numeroAzul4 },
        { id: 5, title: "Flexibilidade e Agilidade", text: "O Google Ads oferece flexibilidade para criar, editar e pausar campanhas conforme necessário. Nossa equipe de especialistas monitora e ajusta continuamente as campanhas para obter os melhores resultados possíveis."
        , delay: 0.8, imagem: numeroAzul5 },
        { id: 6, title: "Aumento das Conversões", text: 'Com a estratégia de anúncios certa, você verá um aumento nas conversões, como mais agendamentos de consultas. Nossa assessoria de marketing trabalha para otimizar suas campanhas e alcançar seus objetivos de negócios.', delay: 0.8, imagem: numeroAzul6 },
      ];


  return (
    <ContainerDermaVantagens id='Derma'>
        <div className='fundoTitulo'>
                <img src={fundoTitulo} alt="" />
            <h5>Com anúncios feito no Google <br/>você pode alcançar muito  
                mais pacientes! A Dermarketing
                te mostra as vantagens! </h5>            
        </div>
         <div className='cards'>
             <motion.div ref={caroussel} className='caroussel' whileTap={{cursor: 'grabbing'}}>
                <motion.div className='inner'
                drag='x'
                dragConstraints={{right:0, left: -widthScroll}}
                >
                {/* <Carta/> */}

                {cards.map((card) => {
                    return(
                    <div style={{border: 'none'}} ref={ref} isInView={isInView}>
                        <ContainerCarta isInView={isInView} id='carta' className='' style={{ animationDelay: `${card.delay}s` }}>
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
                        </ContainerCarta>
                        {/* <div>
                            <img src={card.imagem} alt="" />
                            <h2>{card.title}</h2>
                        </div>
                        <p>{card.text}</p> */}
                    </div>)
                })}

                {/* <Card ref={ref} isInView={isInView} className='card1' >
                        <div><img src={numeroAzul1} alt="numero1" />
                        <h2>Alcance e Visibilidade
                        </h2></div>
                        
                        <p>Aumente a sua exposição e alcance pessoas interessadas no seu serviço. O Google Ads permite que você alcance potenciais clientes no momento certo, quando estão pesquisando por soluções como as suas.
                        </p>
                        
                    </Card> */}
                    {/* <Card>
                        <div>
                        <img src={numeroAzul2} alt="numero2" />
                        <h2>Segmentação Precisa
                        </h2>
                        </div>
                        
                        <p>Nossa assessoria de marketing ajuda você a segmentar seu público-alvo com base em geolocalização, interesses, demografia e comportamento. Com essa segmentação, seus anúncios serão exibidos para as pessoas certas.
                        </p>
                        
                    </Card>
                    <Card ref={ref} isInView={isInView} className='card2'>
                        <div>
                        <img src={numeroAzul3} alt="numero3" />
                        <h2>Controle do orçamento
                        </h2>
                        </div>
                        
                        <p>O Google Ads oferece controle total do orçamento. Estabeleça um limite diário de gastos e ajuste conforme necessário. Nossa assessoria otimiza suas campanhas para maximizar o retorno sobre o investimento (ROI).
                        </p>
                        
                    </Card>
                    <Card>
                        <div>
                        <img src={numeroAzul4} alt="numero4" />
                        <h2>Resultados Mensuráveis
                        </h2>
                        </div>
                        
                        <p>Acompanhe o desempenho de suas campanhas diariamente. Nossa assessoria de marketing fornece relatórios detalhados, permitindo que você entenda o impacto e o retorno de seus anúncios no Google.
                        </p>
                        
                    </Card>
                    <Card>

                        <div>
                        <img src={numeroAzul5} alt="numero5" />
                        <h2>Flexibilidade e Agilidade
                        </h2>
                        </div>
                        
                        <p>O Google Ads oferece flexibilidade para criar, editar e pausar campanhas conforme necessário. Nossa equipe de especialistas monitora e ajusta continuamente as campanhas para obter os melhores resultados possíveis.

                        </p>
                        
                    </Card>
                    <Card>
                        <div>
                        <img src={numeroAzul6} alt="numero6" />
                        <h2>Aumento das Conversões
                        </h2>
                        </div>
                        <p>Com a estratégia de anúncios certa, você verá um aumento nas conversões, como mais agendamentos de consultas. Nossa assessoria de marketing trabalha para otimizar suas campanhas e alcançar seus objetivos de negócios.
                        </p>
                        
                    </Card> */}
                </motion.div>
            </motion.div>
            </div>
            

        {/* <button>Quero atrair mais clientes</button> */}
    </ContainerDermaVantagens>
  )
}

export default DermarVantagens
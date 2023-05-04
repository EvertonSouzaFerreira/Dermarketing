import React, { useState, useEffect } from 'react'


//styled
import {ContainerFooter, ContainerFooterMobile} from './FooterStyled'

//imagens

import logoHeader from '../../images/logo-header.png'
import logoFace from '../../images/logoFace.png'
import logoInstagran from '../../images/logoInstagran.png'
import logoWhatss from '../../images/logoWhatss.png'
import iconTelefone from '../../images/iconTelefone.png'
import iconEmail from '../../images/iconEmail.png'
import iconLocalizacao from '../../images/iconLocalizacao.png'



function Footer() {

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
    <>
    {!width?<ContainerFooter>
        <div className='containerMarcaLogo'>
            <img className='imgLogo' src={logoHeader} alt="" />
            <p>Fale agora mesmo com a nossa 
                equipe pelo WhatsApp e tire 
                todas as suas dúvidas com relação 
                aos nossos serviços, e agende uma 
                mentoria gratuitamente.</p>

            <div className='containerLogos'>
                <img src={logoFace} alt="" />
                <img src={logoInstagran} alt="" />
                <img src={logoWhatss} alt="" />
            </div>
        </div>
        <div className='paginas'>
            <h5>Páginas</h5>
            <ul>
                <li>Página inicial</li>
                <li>Todos os serviços</li>
                <li>Websites</li>
                <li>Clientes</li>
                <li>Entrar em contato</li>
            </ul>
        </div>
        <div className='servicos paginas'>
            <h5>Serviços</h5>
            <ul>
                <li>Branding</li>
                <li>Tráfego Pago</li>
                <li>Criação de Sites</li>
            </ul>
        </div>

        <div className='contato paginas'>
            <h5>Contato</h5>
            <ul>
                <li><img src={iconTelefone} alt="" /> (67) 99228-6495</li>
                <li><img src={iconEmail} alt="" /> contato@dermarketing.com.br</li>
                <li><img src={iconLocalizacao} alt="" /> Campo Grande - Mato Grosso do Sul.</li>
            </ul>
        </div>

    </ContainerFooter>:

    <ContainerFooterMobile>
        <img className='imgNome' src={logoHeader} alt="" />
        <div className='containerInfos'>
        <div className='contato paginas'>
            <h5>Serviços</h5>
            <ul>
                <li>Branding</li>
                <li>Tráfego Pago</li>
                <li>Criação de Sites</li>
            </ul>
        </div>
        <div className='contato paginas'>
            <h5>Contato</h5>
            <ul>
                <li><img src={iconTelefone} alt="" /> (67) 99228-6495</li>
                <li><img src={iconEmail} alt="" /> contato@dermarketing.com.br</li>
                <li><img src={iconLocalizacao} alt="" /> Campo Grande - Mato Grosso do Sul.</li>
            </ul>
        </div>
        </div>
        <div className='containerLogos'>
                <img src={logoFace} alt="" />
                <img src={logoInstagran} alt="" />
                <img src={logoWhatss} alt="" />
            </div>
    </ContainerFooterMobile>}
    </>
    


  )
}

export default Footer
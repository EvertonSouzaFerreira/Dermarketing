import React from 'react'


//styled
import {ContainerFooter} from './FooterStyled'

//imagens

import logoHeader from '../../images/logo-header.png'
import logoFace from '../../images/logoFace.png'
import logoInstagran from '../../images/logoInstagran.png'
import logoWhatss from '../../images/logoWhatss.png'


function Footer() {
  return (
    <ContainerFooter>
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
                <li>(67) 99228-6495</li>
                <li>contato@dermarketing.com.br</li>
                <li>Campo Grande - Mato Grosso do Sul.</li>
            </ul>
        </div>

    </ContainerFooter>
  )
}

export default Footer
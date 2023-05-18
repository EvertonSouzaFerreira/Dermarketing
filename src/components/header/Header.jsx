import React, {useEffect, useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

//img
import logo from '../../images/logo-header.png'
import SiglaLogo from '../../images/SiglaLogo.png'

//styled
import { ContainerHeader, MenuHamburg } from './HeaderStyled'

function Header() {

  const [isHamburgMenu, setIsHamburgMenu] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  const [width, setWidth] = useState(false)

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 900) {
      setWidth(true)
    } else {
      setWidth(false)
    }


    if (width <= 900) {
      setIsHamburgMenu(true);
      setMenuShow(false)
    } else {
      setMenuShow(true)
      setIsHamburgMenu(false);
    }
  }

  useEffect(() => {
    handleResize(); // Executa a função quando o componente é montado
    window.addEventListener('resize', handleResize); // Adiciona um listener para redimensionamento
    return () => window.removeEventListener('resize', handleResize); // Remove o listener quando o componente é desmontado
  }, []);

  const handleMenuShow = () => {
    setMenuShow(!menuShow)
  }

  return (
    <ContainerHeader>
        <div><img src={width? SiglaLogo: logo} alt="" /></div>
        {isHamburgMenu &&<MenuHamburg onClick={handleMenuShow}>{menuShow?<AiOutlineClose/>: <GiHamburgerMenu/>}</MenuHamburg>}
        {menuShow &&<ul>
            <li><a href="#">Página inicial</a></li>
            <li><a href="#servicos">Todos os serviços</a></li>
            <li> <a href="#mentoria">Websites</a> </li>
            <li> <a href="#Derma">Tráfego</a> </li>
            <li> <a href="#divulgue">Branding</a> </li>
            <button><a href="https://contate.me/dermarketing">Entrar em contato</a> </button>
            
        </ul>}

    </ContainerHeader>
  )
}

export default Header
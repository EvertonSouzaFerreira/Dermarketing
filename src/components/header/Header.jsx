import React, {useEffect, useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

//img
import logo from '../../images/logo-header.png'


//styled
import { ContainerHeader, MenuHamburg } from './HeaderStyled'

function Header() {

  const [isHamburgMenu, setIsHamburgMenu] = useState(false);
  const [menuShow, setMenuShow] = useState(false);


  const handleResize = () => {
    const width = window.innerWidth;
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
        <div><img src={logo} alt="" /></div>
        {isHamburgMenu &&<MenuHamburg onClick={handleMenuShow}>{menuShow?<AiOutlineClose/>: <GiHamburgerMenu/>}</MenuHamburg>}
        {menuShow &&<ul>
            <li><a href="#">Página inicial</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li> <a href="#mentoria">Agendar mentoria</a> </li>
            <li>Clientes</li>
        </ul>}

    </ContainerHeader>
  )
}

export default Header
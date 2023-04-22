import React, {useEffect, useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

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
        {isHamburgMenu &&<MenuHamburg onClick={handleMenuShow}>{menuShow?<GrClose/>: <GiHamburgerMenu/>}</MenuHamburg>}
        {menuShow &&<ul>
            <li>Página inicial</li>
            <li> Serviços</li>
            <li>Agendar mentoria</li>
            <li>Clientes</li>
        </ul>}

    </ContainerHeader>
  )
}

export default Header
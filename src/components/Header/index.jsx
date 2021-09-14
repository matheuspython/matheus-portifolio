import { useEffect, useState } from 'react';
import './style.css'
import menu from "../../images/menu.png"

function Header() {
  const [menuVisibilidade, setMenuVisibilidade] = useState(true)
  
  function mobileMenu(){
    setMenuVisibilidade(!menuVisibilidade)
  }

  return (
    <header className="header">
      <div className="container">
        <h1>MATHEUS SOUZA</h1>

        <img src={menu} onClick={mobileMenu} className="btn-mobile" alt="menu mobile" />
        <nav className="desktop">
          <ul>
          <li><a title="link para a home" href="">home</a></li>
            <li><a title="link para as tecnologias"  href="">tecnologias</a></li>
            <li><a title="link para os projetos"  href="">projetos</a></li>          </ul>
        </nav>
      </div>
      {
        !menuVisibilidade && (
          <nav className="mobile">
          <ul>
            <li><a title="link para a home" href="">home</a></li>
            <li><a title="link para as tecnologias"  href="">tecnologias</a></li>
            <li><a title="link para os projetos"  href="">projetos</a></li>
          </ul>
        </nav>
        )
        
      }

    </header>
  )
}

export default Header;
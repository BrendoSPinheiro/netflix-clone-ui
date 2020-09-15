import React from 'react';
import './Header.css';


function Header({ black }) {

  function handleClickDropDown(){
    const menuDropDown = document.querySelector('.mobile ul');
    menuDropDown.classList.toggle('ativo');
    if(menuDropDown.classList.value === "ativo"){
      menuDropDown.style.display = "block";
    }else {
      menuDropDown.style.display = "none";
    }
  }

  return (
    <header className={black ? 'black' : ''}>
      <div className="header-logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
            alt="Netflix"
          />
        </a>
        <nav className="desktop">
          <ul className="primary-navigation">
            <li className="navigation-tab"><a href="/">Início</a></li>
            <li className="navigation-tab"><a href="/">Séries</a></li>
            <li className="navigation-tab"><a href="/">Filmes</a></li>
            <li className="navigation-tab"><a href="/">Mais Recentes</a></li>
            <li className="navigation-tab"><a href="/">Minha Lista</a></li>
          </ul>
        </nav>

        <nav className="mobile">
          <div className="botao-menu-mobile">
            <a 
              href="#" 
              className="text-dropdown" 
              onClick={handleClickDropDown}
            >
              Navegar &#9662;
            </a>
          </div>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/">Séries</a></li>
            <li><a href="/">Filmes</a></li>
            <li><a href="/">Mais Recentes</a></li>
            <li><a href="/">Minha Lista</a></li>
          </ul>
        </nav>
      </div>

      <div className="header-user">
        <a href="/">
          <img
            src="http://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="Usuário"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
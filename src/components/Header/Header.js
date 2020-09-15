import React from 'react';
import './Header.css';


function Header({ black }) {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header-logo">
        <a href="/">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" 
            alt="Netflix"
          />
        </a>
        <ul className="primary-navigation">
          <li className="navigation-tab"><a href="/">Início</a></li>
          <li className="navigation-tab"><a href="/">Séries</a></li>
          <li className="navigation-tab"><a href="/">Filmes</a></li>
          <li className="navigation-tab"><a href="/">Mais Recentes</a></li>
          <li className="navigation-tab"><a href="/">Minha Lista</a></li>
        </ul>
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
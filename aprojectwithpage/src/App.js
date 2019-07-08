import React, { useState } from 'react';
import './styles.css';
import { appState } from './appState';


function App(props) {
  const [ states, setAppState ] = useState(appState);

  const login = (
    <li>
      <a onClick={(event) => { 
        event.preventDefault();
        setAppState({ ...states, login: true}); 
      }} href="./">Login</a>
    </li>
  );
  const loginCss = {
    display: 'inline-block',
    marginRight: '5px',
  };
  const logout = (
    <li>
      <p style={loginCss}> Hello {states.username}, </p>
      <a  onClick={(event) => { 
        event.preventDefault();
        setAppState({ ...states, login: false}); 
      }} href="./">Logout</a>
    </li>
  );

  return (
    <main className="main viewport">
      <header className="header">
        <p>header</p>
        <nav className="nav">
          <ul className="menus">
            {states.login ? logout: login}
          </ul>
        </nav>
      </header>
      <section className="content">
        <aside className="sidebar">
          <ul>
            <li><a href="page1.html">Item1</a></li>
            <li><a href="page2.html">Item2</a></li>
            <li><a href="page3.html">Item3</a></li>
            <li><a href="page3.html">Item3</a></li>
          </ul>
        </aside>
        <article className="article">
          <section>Section 1</section>
          <section>Section 2</section>
          <section>Section 3</section>
        </article>
        <aside className="aside">Aside</aside>
      </section>
      <footer className="footer">Footer</footer>
    </main>
  );
}

export default App;

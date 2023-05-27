import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header class={style.header}>
      <Link href="/"><h1>SAME AGAIN BARMAN</h1></Link>
      <div onClick={toggleMenu} class={style.menuToggle}>
        <div class={`${style.line1} ${isOpen ? style.open : ''}`}/>
        <div class={`${style.line2} ${isOpen ? style.open : ''}`}/>
        <div class={`${style.line3} ${isOpen ? style.open : ''}`}/>
      </div>
      <nav class={`${style.nav} ${isOpen ? style.open : style.closed}`}>
        <Link activeClassName={style.active} href="#about">About</Link>
        <Link activeClassName={style.active} href="#tourdates">Tour Dates</Link>
        <Link activeClassName={style.active} href="#contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;

import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style";

const Header = () => (
  <header class={style.header}>
    <Link href="/">
      <h1>Jane Doe</h1>
    </Link>
    <nav>
      <Link activeClassName={style.active} href="#hero">
        Home
      </Link>
      <Link activeClassName={style.active} href="#about">
        About
      </Link>
    </nav>
  </header>
);

export default Header;

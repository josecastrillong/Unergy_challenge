import { NavLink } from 'react-router-dom';
import styles from 'components/Organisms/Navbar/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.text_link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.text_link} to="/">
        Products
      </NavLink>
      <NavLink className={styles.text_link} to="/">
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;
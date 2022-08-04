import { NavLink } from 'react-router-dom';
import styles from 'components/Organisms/Navbar/Navbar.module.css';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {

  const [istoggled, setToggled] = useState(false);

  const toggle = () => {
    setToggled(!istoggled);
  }

  return (
    <nav className={styles.nav__container}>
      <div className={styles.nav__logo}>
        <p className={styles.description_title}>Unergy</p>
      </div>
      <div className={styles.nav__links}>
        <div type='button' className={styles.menu_button}>
          <MenuIcon onClick={toggle} />
        </div>  
        <div className={styles.links}>
          <NavLink className={styles.text_link} to="/">
            Home
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
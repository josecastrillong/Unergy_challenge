import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from './Footer.module.css';


function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://www.instagram.com/unergyco/" target="_blank" rel="noreferrer">
        <InstagramIcon style={{ fontSize: 50}}/>
      </a>
      <a href="https://www.linkedin.com/company/unergyio/" target="_blank" rel="noreferrer">
        <LinkedInIcon style={{ fontSize: 50}}/>
      </a>
      <a href="https://twitter.com/unergyio" target="_blank" rel="noreferrer">
        <TwitterIcon style={{ fontSize: 50}}/>
      </a>
    </footer>
  );
}

export default Footer;
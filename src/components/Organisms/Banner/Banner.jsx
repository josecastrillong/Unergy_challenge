import styles from 'components/Organisms/Banner/Banner.module.css';
import SolarPowerIcon from '@mui/icons-material/SolarPower';

function Banner() {

  return (
    <div className={styles.body}>
      <div className={styles.description}>
        <p className={styles.description_text}>
        Nuestra misión es llevar la energía limpia a cualquier persona en el mundo, por medio de las inversiones sostenibles y digitales.
        </p>
      </div>
      <div className={styles.links_section}>
        <span>
          Conoce más sobre nosotros
        </span>
        <a href="https://unergy.io/nosotros" target="_blank" rel="noreferrer">
          <SolarPowerIcon  style={{ fontSize: 200}}/>
        </a>
      </div>
    </div>
  );
}

export default Banner;
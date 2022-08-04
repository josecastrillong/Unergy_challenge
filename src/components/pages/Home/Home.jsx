import Navbar from "components/Organisms/Navbar/Navbar";
import Banner from "components/Organisms/Banner/Banner";
import Projects from "components/Organisms/ProjectContainer/Projects";
import Footer from "components/Organisms/Footer/Footer";
import styles from "./Home.module.css"

function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <Banner />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
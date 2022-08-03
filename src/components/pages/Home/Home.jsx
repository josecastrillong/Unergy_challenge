import Navbar from "components/Organisms/Navbar/Navbar";
import Banner from "components/Organisms/Banner/Banner";
import Projects from "components/Organisms/ProjectContainer/Projects";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Projects />
    </div>
  );
}

export default Home;
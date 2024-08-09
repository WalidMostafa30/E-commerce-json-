import Banner from "../../components/Banner/Banner";
import Landing from "../Landing/Landing";
import Services from "../Services/Service";
import "./Home.css";

const Home = () => {
  return (
    <section className="Home">
      <Landing />
      <Services />
      <Banner />
    </section>
  );
};

export default Home;

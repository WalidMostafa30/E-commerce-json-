import "./Banner.css";
import bannerImg from "../../assets/images/banner.webp";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <article className="Banner">
      <img src={bannerImg} alt="Banner" />

      <div className="Banner__content">
        <p>repair Services</p>

        <h1>
          Up to <span>70% off</span> _ All t-shirts
        </h1>

        <Link className="main-btn main-btn--light" to={"categories"}>
          Explore more
        </Link>
      </div>
    </article>
  );
};

export default Banner;

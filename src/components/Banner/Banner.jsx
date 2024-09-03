import "./Banner.css";
import bannerImg from "../../assets/images/banner.webp";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <article className="Banner">
      <img
        src={bannerImg}
        alt="Banner"
        className="w-100 h-100 object-fit-cover"
      />

      <div className="Banner__content">
        <p className="text-light">repair Services</p>

        <h1>
          Up to <span>70% off</span> _ All t-shirts
        </h1>

        <Link
          className="main-btn main-btn--light py-3 px-4 fs-3"
          to={"categories"}
        >
          Explore more
        </Link>
      </div>
    </article>
  );
};

export default Banner;

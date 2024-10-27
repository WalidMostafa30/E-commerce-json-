import cartImg from "../../assets/images/shopping_cart.webp";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <article className="Landing">
      <div className="container h-100 d-flex flex-column-reverse gap-5 justify-content-center align-items-center justify-content-xl-around flex-xl-row">
        <div className="d-flex flex-column align-items-center gap-2">
          <p className="Landing__welcome fs-2">welcome to</p>

          <h1 className="Landing__title">
            Mini<span className="textMC">Store</span>
          </h1>

          <Link to={"categories"} className="mainBtn px-3 py-2 fs-3">
            Shop Now
          </Link>
        </div>

        <div className="Landing__img">
          <img src={cartImg} alt="img" loading="lazy" />
        </div>
      </div>
    </article>
  );
};

export default Landing;

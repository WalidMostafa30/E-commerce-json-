import { Container } from "react-bootstrap";
import cartImg from "../../assets/images/shopping_cart.webp";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <article className="Landing">
      <Container className="Landing__container">
        <div className="Landing__group">
          <p className="Landing__welcome">welcome to</p>
          <h1 className="Landing__title">
            Mini<span>Store</span>
          </h1>
          <Link to={"categories"} className="Landing__btn main-btn">
            Shop Now
          </Link>
        </div>

        <img className="Landing__img" src={cartImg} alt="img" />
      </Container>
    </article>
  );
};

export default Landing;

import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faTruck,
  faUnlockKeyhole,
} from "@fortawesome/free-solid-svg-icons";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { Container } from "react-bootstrap";

export default function Services() {
  return (
    <article className="Services">
      <GlobalTitle title={"Services"} />
      <Container className="Services__container">
        <div className="Services__Service">
          <FontAwesomeIcon
            icon={faUnlockKeyhole}
            className="Services__Service-icon"
          />
          <h1 className="Services__Service-title">Payment Secure</h1>
          <p className="Services__Service-paragraph">Free shipping on order</p>
        </div>

        <div className="Services__Service">
          <FontAwesomeIcon
            icon={faHeadphones}
            className="Services__Service-icon"
          />
          <h1 className="Services__Service-title">Support 24/7</h1>
          <p className="Services__Service-paragraph">Contact us 24 hrs a day</p>
        </div>

        <div className="Services__Service">
          <FontAwesomeIcon icon={faTruck} className="Services__Service-icon" />
          <h1 className="Services__Service-title">Free Shipping</h1>
          <p className="Services__Service-paragraph">Free shipping on order</p>
        </div>
      </Container>
    </article>
  );
}

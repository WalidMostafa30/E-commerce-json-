import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="Footer">
      <Container className="Footer__container">
        <div className="Footer__title-follow">
          <h1 className="Footer__Title">
            Mini<span>Store</span>
          </h1>

          <div className="Footer__follow">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100011538554307&mibextid=ViGcVu"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              target="_blank"
              href="https://instagram.com/walid_mostafa10?igshid=M2RkZGJiMzhjOQ=="
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/walid-mostafa-bb3567295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a target="_blank" href="https://github.com/WalidMostafa30">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>

        <div className="Footer__pages">
          <h2 className="Footer__pages-title">Pages</h2>

          <ul className="Footer__links">
            <Link to={"/"} className="Footer__links-link">
              Home
            </Link>
            <Link to={"categories"} className="Footer__links-link">
              Categories
            </Link>
            <Link to={"cart"} className="Footer__links-link">
              Cart
            </Link>
            <Link to={"favourite"} className="Footer__links-link">
              Favourite
            </Link>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

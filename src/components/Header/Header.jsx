import "./Header.css";
import { Container } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import BarsMenu from "../BarsMenu/BarsMenu.jsx";
import { useState } from "react";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((prev) => !prev);
  };

  return (
    <header className="Header">
      <Container className="Header__container">
        <div className="Header__head d-flex align-items-center justify-content-md-center justify-content-between">
          <h1 className="Header__title">
            Mini<span>Store</span>
          </h1>
          <BarsMenu onClick={toggleNav} status={openNav} />
        </div>

        <NavBar openNav={openNav} />
      </Container>
    </header>
  );
}

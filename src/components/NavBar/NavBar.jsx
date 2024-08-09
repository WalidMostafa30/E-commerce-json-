import "./NavBar.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import BarsMenu from "../BarsMenu/BarsMenu";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { actGetFavourites } from "../../store/favouriteSlice.js";
import { authLogout } from "../../store/authSlice.js";

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => setShowNav(!showNav);

  const { items } = useSelector((state) => state.cart);

  const { itemsId } = useSelector((state) => state.favourite);

  const { user, accessToken } = useSelector((state) => state.auth);

  const itemsLength = Object.keys(items).length;

  const favLength = Object.keys(itemsId).length;

  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetFavourites("ProductIds"));
    }
  }, [dispatch, accessToken]);
  return (
    <>
      <div className="NavBar">
        <Container className="NavBar__container">
          <h1 className="NavBar__title">
            Mini<span>Store</span>
          </h1>
          <div
            className={showNav ? "NavBar__links open" : "NavBar__links"}
          >
            <NavLink to={"/"} className="NavBar__link">
              Home
            </NavLink>
            <NavLink to={"categories"} className="NavBar__link">
              Category
            </NavLink>

            {!accessToken ? (
              <div className="signUpDiv">
                <Link to={"signup"}>Sign Up</Link>
                <span></span>
                <Link to={"login"}>Log In</Link>
              </div>
            ) : (
              <div className="userLogIn">
                <h4>{user.name}</h4>
                <FontAwesomeIcon icon={faCaretDown} />
                <span onClick={() => dispatch(authLogout())}>log out</span>
              </div>
            )}
          </div>

          <div className="NavBar__icons">
            <Link to={"/favourite"} className="NavBar__icon">
              <FontAwesomeIcon icon={faHeart} />
              {favLength > 0 && (
                <span className="NavBar__icon-quantity">
                  {favLength > 9 ? "+9" : favLength}
                </span>
              )}
            </Link>

            <Link to={"cart"} className="NavBar__icon">
              <FontAwesomeIcon icon={faCartShopping} />
              {itemsLength > 0 && (
                <span className="NavBar__icon-quantity">
                  {itemsLength > 9 ? "+9" : itemsLength}
                </span>
              )}
            </Link>

            <BarsMenu onClick={handleNav} className={showNav} />
          </div>
        </Container>
      </div>
    </>
  );
}

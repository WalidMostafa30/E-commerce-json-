/* eslint-disable react/prop-types */
import "./NavBar.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { actGetFavourites } from "../../store/favouriteSlice.js";
import { authLogout } from "../../store/authSlice.js";

export default function NavBar({ openNav }) {
  const { items } = useSelector((state) => state.cart);

  const { itemsId } = useSelector((state) => state.favourite);

  const { user, accessToken } = useSelector((state) => state.auth);

  const itemsLength = Object.keys(items).length;

  const favLength = Object.keys(itemsId).length;

  const dispatch = useDispatch();
  const [userMenu, setUserMenu] = useState(false);

  const toggleUserMenu = () => setUserMenu((prev) => !prev);

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetFavourites("ProductIds"));
    }
  }, [dispatch, accessToken]);
  return (
    <nav className="NavBar">
      <div>
        {accessToken ? (
          <div
            className="main-btn main-btn--light d-flex align-items-center gap-2 py-1 px-2 position-relative"
            onClick={toggleUserMenu}
          >
            <h4>{user.name}</h4>
            <FontAwesomeIcon icon={faCaretDown} />
            {userMenu && (
              <div className="user-menu">
                <h4>Profile</h4>
                <h4 onClick={() => dispatch(authLogout())}>Log Out</h4>
              </div>
            )}
          </div>
        ) : (
          <div>
            <Link
              className="main-btn px-2 py-1 me-2 main-btn--light"
              to="/login"
            >
              Log In
            </Link>
            <Link className="main-btn px-2 py-1" to="/signup">
              Sign Up
            </Link>
          </div>
        )}
      </div>

      <div className={openNav ? "NavBar__links open" : "NavBar__links"}>
        <NavLink to={"/"} className="NavBar__link">
          Home
        </NavLink>
        <NavLink to={"categories"} className="NavBar__link">
          Category
        </NavLink>
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
      </div>
    </nav>
  );
}

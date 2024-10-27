import "./NavBar.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { actGetFavourites } from "../../store/favouriteSlice.js";
import { authLogout } from "../../store/authSlice.js";
import { FaUserCircle } from "react-icons/fa";
import { IoCart, IoClose, IoMenu } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  const { items } = useSelector((state) => state.cart);

  const { itemsId } = useSelector((state) => state.favourite);

  const { user, accessToken } = useSelector((state) => state.auth);

  const cartLength = Object.keys(items).length;

  const favLength = itemsId.length;

  const dispatch = useDispatch();
  const [userMenu, setUserMenu] = useState(false);

  const toggleUserMenu = () => setUserMenu((prev) => !prev);

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetFavourites("ProductIds"));
    }
  }, [dispatch, accessToken]);
  return (
    <>
      <nav
        className={`${
          nav ? "open" : ""
        } NavBar d-flex align-items-center justify-content-between gap-3`}
      >
        <NavLink onClick={closeNav} to={"/"} className="NavBar__link fs-5 py-2">
          Home
        </NavLink>

        <NavLink
          onClick={closeNav}
          to={"categories"}
          className="NavBar__link fs-5 py-2"
        >
          Categories
        </NavLink>
      </nav>

      {/* =========================================================================== */}

      <div className="d-flex align-items-center gap-3">
        {accessToken ? (
          <div className="d-flex align-items-center gap-3">
            <Link to={"/favourite"} className="fs-3 position-relative">
              <IoMdHeart />
              {favLength > 0 && (
                <span className="iconNum">
                  {favLength > 9 ? "+9" : favLength}
                </span>
              )}
            </Link>

            <Link to={"cart"} className="fs-3 position-relative">
              <IoCart />
              {cartLength > 0 && (
                <span className="iconNum">
                  {cartLength > 9 ? "+9" : cartLength}
                </span>
              )}
            </Link>

            <div
              className="position-relative"
              onClick={toggleUserMenu}
              style={{ cursor: "pointer" }}
            >
              <FaUserCircle className="fs-3" />
              {userMenu && (
                <div className="user__menu">
                  <span className="fs-5">Hi</span>
                  <h4>{user.name}</h4>

                  <div>
                    <button
                      className="fs-4 w-100 btn btn-danger mt-2"
                      onClick={() => dispatch(authLogout())}
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <Link className="mainBtn px-3 py-2" to="/login">
              Log In
            </Link>
          </div>
        )}

        <div className="BarsMenu fs-2" style={{ cursor: "pointer" }}>
          {nav ? <IoClose onClick={closeNav} /> : <IoMenu onClick={openNav} />}
        </div>
      </div>
    </>
  );
}

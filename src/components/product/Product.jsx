/* eslint-disable react/prop-types */
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice.js";
import { actLikeToggle } from "../../store/favouriteSlice.js";
import { Link, useNavigate } from "react-router-dom";

export default function Product({ pro }) {
  const dispatch = useDispatch();
  const { itemsId } = useSelector((state) => state.favourite);
  const { accessToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const isFavourite = itemsId.includes(pro.id);

  const handleAddToCart = () => {
    if (accessToken) {
      dispatch(addToCart(pro.id));
    } else {
      navigate("/login");
    }
  };

  const handleAddToFavourite = () => {
    if (accessToken) {
      dispatch(actLikeToggle(pro.id));
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="Product">
      <div className="Product__img">
        <img src={pro.images?.[0]} alt={pro.title} loading="lazy" />
        <div className="Product__actions">
          <Link
            className="Product__icon"
            to={`/categories/products/${pro.catPrefix}/${pro.id}`}
          >
            <FontAwesomeIcon icon={faEye} />
          </Link>

          <div className="Product__icon" onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faCartShopping} />
          </div>

          <div
            className={`Product__icon ${isFavourite ? "active" : ""}`}
            onClick={handleAddToFavourite}
          >
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>

      <h4 title={pro.title} className="Product__title">
        {pro.title}
      </h4>

      <p className="Product__price">{pro.price} $</p>
    </div>
  );
}

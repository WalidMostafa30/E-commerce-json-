/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
  addToCart,
  decressquantity,
  removeFromCart,
} from "../../store/cartSlice";
import "./CartProducts.css";

const CartProducts = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div className="CartProducts">
      {products.map((pro) => {
        return (
          <div key={pro.id} className="CartProduct">
            <div className="CartProduct__head">
              <h4 className="CartProduct-title">{pro.title}</h4>

              <h3 className="CartProduct-price">{pro.price} $</h3>
            </div>

            <div className="CartProduct__body">
              <img className="CartProduct-img" src={pro.images[0]} alt="img" />

              <div className="CartProduct__actions">
                <h3 className="">{pro.price * pro.quantity} $</h3>

                <div className="CartProduct-quantity">
                  <button onClick={() => dispatch(decressquantity(pro.id))}>
                    -
                  </button>

                  <p>{pro.quantity}</p>

                  <button onClick={() => dispatch(addToCart(pro.id))}>+</button>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(pro.id))}
                  className="CartProduct-remove main-btn main-btn--danger"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartProducts;

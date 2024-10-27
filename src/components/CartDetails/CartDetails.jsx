/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cartSlice";

const CartDetails = ({ products }) => {
  const dispatch = useDispatch();

  const totalPrice = products.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  const totalPieces = products.reduce((acc, product) => {
    acc += product.quantity;
    return acc;
  }, 0);

  return (
    <div
      className="p-3 rounded-3 d-flex flex-column align-items-center"
      style={{ border: "3px solid var(--main-color)" }}
    >
      <table className="table table-striped table-hover table-bordered fs-4">
        <tbody>
          <tr>
            <td>Total Product</td>
            <td>{products.length}</td>
          </tr>
          <tr>
            <td>Total pieces</td>
            <td>{totalPieces}</td>
          </tr>
          <tr>
            <td>Total Price</td>
            <td>{totalPrice} $</td>
          </tr>
        </tbody>
      </table>

      <button
        className="btn btn-danger py-1 px-3 fs-3"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartDetails;

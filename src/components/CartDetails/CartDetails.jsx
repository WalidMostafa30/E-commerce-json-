/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import "./CartDetails.css";
import { clearCart } from "../../store/cartSlice";
import { Table } from "react-bootstrap";

const CartDetails = ({ products }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.dark);

  const totalPrice = products.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  const totalPieces = products.reduce((acc, product) => {
    acc += product.quantity;
    return acc;
  }, 0);

  return (
    <div className="CartDetails">
      <Table striped bordered hover variant={darkMode && "dark"}>
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
      </Table>

      <button
        className="main-btn main-btn--danger"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartDetails;

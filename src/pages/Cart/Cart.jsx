import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { Container } from "react-bootstrap";
import CartProducts from "../../components/CartProducts/CartProducts";
import CartDetails from "../../components/CartDetails/CartDetails";
import Message from "../../components/Message/Message";
import imgCart from "../../assets/images/Cart.webp";
import { useEffect } from "react";
import { cleanCartUseEffect, getFullProducts } from "../../store/cartSlice";

export default function Cart() {
  const { items, fullProducts } = useSelector((state) => state.cart);

  const products = fullProducts.map((pro) => ({
    ...pro,
    quantity: items[pro.id],
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFullProducts());

    return () => dispatch(cleanCartUseEffect());
  }, [dispatch]);

  return (
    <section className="Cart">
      <GlobalTitle title={"Cart"} />

      {fullProducts.length > 0 ? (
        <Container className="Cart__container">
          <div className="Cart__details">
            <CartDetails products={products} />
          </div>

          <div className="Cart__products">
            <CartProducts products={products} />
          </div>
        </Container>
      ) : (
        <Message msg={"Cart Is Empty... Add Some Products"} msgImg={imgCart} />
      )}
    </section>
  );
}

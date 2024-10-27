import { useDispatch, useSelector } from "react-redux";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import CartProducts from "../../components/CartProducts/CartProducts";
import CartDetails from "../../components/CartDetails/CartDetails";
import Message from "../../components/Message/Message";
import imgCart from "../../assets/images/Cart.webp";
import { useEffect } from "react";
import { cleanCartUseEffect, getFullProducts } from "../../store/cartSlice";
import { Navigate } from "react-router-dom";

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

  const { accessToken } = useSelector((state) => state.auth);

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="Cart">
      <GlobalTitle title={"Cart"} />

      {fullProducts.length > 0 ? (
        <div className="Cart__container container row m-auto g-3">
          <div className="Cart__details col-12 col-xl-5">
            <CartDetails products={products} />
          </div>

          <div className="Cart__products col-12 col-xl-7">
            <CartProducts products={products} />
          </div>
        </div>
      ) : (
        <Message msg={"Cart Is Empty... Add Some Products"} msgImg={imgCart} />
      )}
    </section>
  );
}

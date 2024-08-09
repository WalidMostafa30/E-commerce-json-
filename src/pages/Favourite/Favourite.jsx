import "./Favourite.css";
import { Container } from "react-bootstrap";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/product/Product";
import Message from "../../components/Message/Message";
import imgFav from "../../assets/images/Favourite.webp";
import {
  actGetFavourites,
  productsFullInfoCleanUp,
} from "../../store/favouriteSlice";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Favourite = () => {
  const { productsFullInfo } = useSelector((state) => state.favourite);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetFavourites("ProductsFullInfo"));

    return () => dispatch(productsFullInfoCleanUp());
  }, [dispatch]);

  const { accessToken } = useSelector((state) => state.auth);

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="Favourite">
      <GlobalTitle title={"Favourite"} />

      {productsFullInfo.length !== 0 ? (
        <Container className="Favourite__container">
          <div className="Favourite__products">
            {productsFullInfo.map((pro) => {
              return (
                <div className="Favourite__product" key={pro.id}>
                  <Product pro={pro} />
                </div>
              );
            })}
          </div>
        </Container>
      ) : (
        <Message msg={"No Favourites Yet... Add Some"} msgImg={imgFav} />
      )}
    </section>
  );
};

export default Favourite;

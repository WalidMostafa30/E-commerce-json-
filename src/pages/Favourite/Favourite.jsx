import "./Favourite.css";
import { Container } from "react-bootstrap";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import imgFav from "../../assets/images/Favourite.webp";
import {
  actGetFavourites,
  productsFullInfoCleanUp,
} from "../../store/favouriteSlice";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import ProductsItms from "../../components/ProductsItms/ProductsItms";

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
          <div className="col-12 text-center mb-3">
            <button
              className="main-btn py-1 px-3 fs-4"
              // onClick={() => dispatch(clearFav())}
            >
              Clear All Favourite
            </button>
          </div>

          <ProductsItms products={productsFullInfo} />
        </Container>
      ) : (
        <Message msg={"No Favourites Yet... Add Some"} msgImg={imgFav} />
      )}
    </section>
  );
};

export default Favourite;

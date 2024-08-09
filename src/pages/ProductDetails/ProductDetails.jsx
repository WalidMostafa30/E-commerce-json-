import { useDispatch, useSelector } from "react-redux";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../../store/cartSlice";
import { cleanProducts } from "../../store/productsSlice";
import { getProductDetails } from "../../store/productDetailsSlice";
import Loading from "../../components/Loading/Loading";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetails, isLoading, error } = useSelector(
    (state) => state.productDetails
  );

  const [activeImg, setActiveImg] = useState(0);
  const imgNum = (index) => setActiveImg(index);

  useEffect(() => {
    dispatch(getProductDetails(id));

    return () => dispatch(cleanProducts());
  }, [dispatch, id]);

  return (
    <section className="ProductDetails">
      <Loading isLoading={isLoading} error={error}>
        <Container className="ProductDetails__container">
          <div className="ProductDetails__imgs">
            <img
              className="ProductDetails__big-img"
              src={productDetails.images && productDetails.images[activeImg]}
              alt="img"
            />

            <div className="ProductDetails__small-imgs">
              {productDetails.images &&
                productDetails.images.map((img, index) => {
                  return (
                    <img
                      className={
                        activeImg === index
                          ? "ProductDetails__small-img active"
                          : "ProductDetails__small-img"
                      }
                      key={index}
                      src={img}
                      alt="img"
                      onClick={() => imgNum(index)}
                    />
                  );
                })}
            </div>
          </div>

          <div className="ProductDetails__info">
            <h1 className="ProductDetails__info-title">
              {productDetails.title}
            </h1>

            <h5 className="ProductDetails__info-description">
              {productDetails.description}
            </h5>

            <p className="ProductDetails__info-price">
              {productDetails.price} $
            </p>

            <button
              className="ProductDetails__info-btn main-btn"
              onClick={() => dispatch(addToCart(productDetails.id))}
            >
              Add To Cart <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </Container>
      </Loading>
    </section>
  );
};

export default ProductDetails;

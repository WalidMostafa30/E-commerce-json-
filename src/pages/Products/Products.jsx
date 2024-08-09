import { useParams } from "react-router-dom";
import "./Products.css";
import { Container } from "react-bootstrap";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/product/Product";
import { cleanProducts, getProducts } from "../../store/productsSlice";
import Loading from "../../components/Loading/Loading";

const Products = () => {
  const { prefix } = useParams();
  const { products, isLoading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(prefix));

    return () => dispatch(cleanProducts());
  }, [dispatch, prefix]);

  return (
    <section className="Products">
      <GlobalTitle title={"Products"} />

      <Loading isLoading={isLoading} error={error}>
        <Container className="Products__container">
          {products.map((pro) => {
            return (
              <div className="Products__product" key={pro.id}>
                <Product pro={pro} />
              </div>
            );
          })}
        </Container>
      </Loading>
    </section>
  );
};

export default Products;

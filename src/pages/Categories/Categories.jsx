import { Container } from "react-bootstrap";
import "./Categories.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import Category from "../../components/Category/Category";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../store/categoriesSlice";
import Loading from "../../components/Loading/Loading";

const Categories = () => {
  const { categories, isLoading, error } = useSelector(
    (state) => state.category
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <section className="Categories">
      <GlobalTitle title={"Categories"} />
      
      <Loading isLoading={isLoading} error={error}>
        <Container className="Categories__container">
          {categories.map((cat) => {
            return <Category key={cat.id} cat={cat} />;
          })}
        </Container>
      </Loading>
    </section>
  );
};

export default Categories;

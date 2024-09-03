/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Category.css";

const Category = ({ cat }) => {
  return (
    <Link to={`/categories/products/${cat.prefix}`} className="Category">
      <div className="Category__img">
        <img src={cat.img} alt="img" />
      </div>
      <h3 className="Category__title">{cat.title}</h3>
    </Link>
  );
};

export default Category;

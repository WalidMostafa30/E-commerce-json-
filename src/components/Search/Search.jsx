/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";
import "./Search.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Search = ({ handleSearch, showSearch }) => {
  const mainData = useSelector((state) => state.mainData);

  const [Products, setProducts] = useState([]);

  const [input, setInput] = useState("");

  const [selectedOption, setSelectedOption] = useState("category");

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    setSelectedOption(name);
    setInput("");
    setProducts([]);
  };

  const onChangeSearch = (e) => {
    setInput(e.target.value);

    const filterData = mainData[selectedOption].filter((data) =>
      data.title.toUpperCase().includes(e.target.value.trim().toUpperCase())
    );

    if (e.target.value.trim().length !== 0) {
      setProducts(filterData);
    } else {
      setProducts([]);
    }
  };

  const handleChooseProduct = () => {
    handleSearch();
    setInput("");
    setProducts([]);
  };

  return (
    <div className={showSearch ? "Search active" : "Search"}>
      <button className="Search__close-btn" onClick={handleSearch}>
        X
      </button>

      <div className="Search__checkBox">
        <h5>Choose what you want to search for?</h5>
        <label
          className={
            selectedOption === "category" ? "main-btn checked" : "main-btn"
          }
        >
          <input
            type="checkbox"
            name="category"
            onChange={handleCheckboxChange}
          />
          Category
        </label>{" "}
        <b>OR</b>{" "}
        <label
          className={
            selectedOption === "main-btn products" ? "checked" : "main-btn"
          }
        >
          <input
            type="checkbox"
            name="products"
            onChange={handleCheckboxChange}
          />
          Product
        </label>
      </div>

      <Container className="Search__container">
        <input
          type="search"
          placeholder="Search.."
          className="Search__input"
          value={input}
          onChange={onChangeSearch}
        />

        <div className="Search__result">
          {Products &&
            Products.map((pro) => {
              return (
                <Link
                  key={pro.id}
                  to={
                    selectedOption === "category"
                      ? `/categories/products/${pro.prefix}`
                      : `/categories/products/${pro.catPrefix}/${pro.id}`
                  }
                  className="Search__item"
                  onClick={handleChooseProduct}
                >
                  <img
                    className="Search__item__img"
                    src={
                      selectedOption === "category"
                        ? pro.img
                        : pro.images && pro.images[0]
                    }
                    alt="img"
                  />
                  <h3 className="Search__item__title">{pro.title}</h3>
                </Link>
              );
            })}
        </div>
      </Container>
    </div>
  );
};

export default Search;

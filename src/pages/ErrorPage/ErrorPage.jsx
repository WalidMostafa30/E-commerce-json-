import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <article className="ErrorPage">
      error
      <Link to={"/"} replace={true}>
        back
      </Link>
    </article>
  );
};

export default ErrorPage;

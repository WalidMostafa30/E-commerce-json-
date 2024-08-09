import { Container } from "react-bootstrap";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actAuthLogin } from "../../store/authSlice";

const LogIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState({});

  const onChangeHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken, error, loading } = useSelector((state) => state.auth);

  const onSupmitHandler = (e) => {
    e.preventDefault();

    const validation = {};

    if (!form.email.trim()) {
      validation.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      validation.email = "email is not valid";
    }

    if (!form.password.trim()) {
      validation.password = "password is required";
    } else if (form.password.length < 6) {
      validation.password = "password should be at least 6 char";
    }

    setErrMsg(validation);

    if (Object.keys(validation).length === 0) {
      dispatch(actAuthLogin(form))
        .unwrap()
        .then(() => {
          navigate("/");
        });
    }
  };

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <section className="SignUp">
      <GlobalTitle title={"Log In"} />
      <Container className="SignUp__container">
        <form className="col-11 col-md-6" onSubmit={onSupmitHandler}>
          <div className="SignUp__input">
            <label className="fs-5">E-mail</label>
            <input
              name="email"
              type="email"
              placeholder="E-mail.."
              value={form.email}
              onChange={onChangeHandler}
              className={errMsg.email && "border-danger"}
            />
            {errMsg.email && (
              <span className="text-danger fw-medium">{errMsg.email}</span>
            )}
          </div>

          <div className="SignUp__input">
            <label className="fs-5">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password.."
              value={form.password}
              onChange={onChangeHandler}
              className={errMsg.password && "border-danger"}
            />
            {errMsg.password && (
              <span className="text-danger fw-medium">{errMsg.password}</span>
            )}
          </div>

          <button className="main-btn m-auto">
            {loading ? "loading..." : "Lon in"}
          </button>

          <Link className="m-auto fs-5" to={"/signup"}>
            create acount
          </Link>
          {error && (
            <p className="alert alert-danger fw-medium text-center">{error}</p>
          )}
        </form>
      </Container>
    </section>
  );
};

export default LogIn;

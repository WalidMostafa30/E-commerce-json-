import { Container } from "react-bootstrap";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import "./SignUp.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actAuthRegister } from "../../store/authSlice";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errMsg, setErrMsg] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { accessToken, error, loading } = useSelector((state) => state.auth);

  const onChangeHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSupmitHandler = (e) => {
    e.preventDefault();

    const validation = {};

    if (!form.name.trim()) {
      validation.name = "name is required";
    }

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

    if (!form.confirmPassword.trim()) {
      validation.confirmPassword = "confirm password is required";
    } else if (form.confirmPassword !== form.password) {
      validation.confirmPassword = "password not matched";
    }

    setErrMsg(validation);

    if (Object.keys(validation).length === 0) {
      dispatch(
        actAuthRegister({
          name: form.name,
          password: form.password,
          email: form.email,
        })
      )
        .unwrap()
        .then(() => {
          navigate("/login");
        });
    }
  };

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <section className="SignUp">
      <GlobalTitle title={"Sign Up"} />

      <Container className="SignUp__container">
        <form className="col-11 col-md-6" onSubmit={onSupmitHandler}>
          <div className="SignUp__input">
            <label className="fs-5">Name</label>
            <input
              type="text"
              placeholder="Name.."
              name="name"
              value={form.name}
              onChange={onChangeHandler}
              className={errMsg.name && "border-danger"}
            />
            {errMsg.name && (
              <span className="text-danger fw-medium">{errMsg.name}</span>
            )}
          </div>

          <div className="SignUp__input">
            <label className="fs-5">E-mail</label>
            <input
              type="email"
              placeholder="E-mail.."
              name="email"
              value={form.email}
              onChange={onChangeHandler}
              className={(errMsg.email || error) && "border-danger"}
            />
            {errMsg.email && (
              <span className="text-danger fw-medium">{errMsg.email}</span>
            )}
            {error && <span className="text-danger fw-medium">{error}</span>}
          </div>

          <div className="SignUp__input">
            <label className="fs-5">Password</label>
            <input
              type="password"
              placeholder="Password.."
              name="password"
              value={form.password}
              onChange={onChangeHandler}
              className={errMsg.password && "border-danger"}
            />
            {errMsg.password && (
              <span className="text-danger fw-medium">{errMsg.password}</span>
            )}
          </div>

          <div className="SignUp__input">
            <label className="fs-5">Confirm Password</label>
            <input
              type="password"
              placeholder="confirmPassword.."
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={onChangeHandler}
              className={errMsg.confirmPassword && "border-danger"}
            />
            {errMsg.confirmPassword && (
              <span className="text-danger fw-medium">
                {errMsg.confirmPassword}
              </span>
            )}
          </div>

          <button className="main-btn m-auto">
            {loading ? "loading..." : "Submit"}
          </button>

          <Link className="m-auto fs-5" to={"/login"}>
            already have an acount?
          </Link>
        </form>
      </Container>
    </section>
  );
};

export default SignUp;

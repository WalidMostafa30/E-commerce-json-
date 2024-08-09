/* eslint-disable react/prop-types */
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import errImg from "../../assets/images/Oops!.webp";

const Loading = ({ isLoading, error, children }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Message msgImg={errImg} msg={"Not Found"} />;
  }

  return <>{children}</>;
};

export default Loading;

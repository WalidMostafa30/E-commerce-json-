/* eslint-disable react/prop-types */
import "./Message.css";

const Message = ({ msg, msgImg }) => {
  return (
    <div className="Message">
      <img src={msgImg} alt="img" />
      <h2>{msg}</h2>
    </div>
  );
};

export default Message;

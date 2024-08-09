/* eslint-disable react/prop-types */
import "./BarsMenu.css"

const BarsMenu = ({onClick,className}) => {
  return (
    <div
      onClick={onClick}
      className={className ? "BarsMenu open" : "BarsMenu"}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BarsMenu

import React from "react";
import TextView from "../TextView";
import "./index.css";
import PropTypes from "prop-types";

function ButtonView(props) {
  const { color, size, textcolor } = props;
  console.log(color, size, textcolor);
  return (
    <div>
      <button
        className={`${color} ${size} ${textcolor} btn`}
        onClick={props.onClick}
      >
        <TextView text="Log In" align="center" />
      </button>
    </div>
  );
}

ButtonView.propTypes = {
  color: PropTypes.oneOf(["blue", "green"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  align: PropTypes.oneOf(["center", "left", "right"]),
};

ButtonView.defaultProps = {
  color: "blue",
  size: "md",
  align: "left",
};
export default ButtonView;

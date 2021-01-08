import React from "react";
import "./index.css";
import PropTypes from "prop-types";

const TextView = (props) => {
  const { size, text, align, weight, color } = props;
  // console.log({ size }, { text }, { align }, { weight }, { color });
  return <p className={`${size} ${align} ${weight} ${color} `}>{props.text}</p>;
  // return <p className="lg align weight color">{props.text}</p>;
};

TextView.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xs"]),
  color: PropTypes.oneOf(["black", "green", "red"]),
  align: PropTypes.oneOf(["left", "right", "center"]),
  weight: PropTypes.oneOf(["bold", "italic", "underline"]),
  strike: PropTypes.string,
};

TextView.defaultProps = {
  text: "",
  weight: "bold",
  color: "black",
  size: "md",
  align: "left",
};

export default TextView;

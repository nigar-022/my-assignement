import React from "react";
import PropTypes from "prop-types";
import "./index.css";

function InputTextView(props) {
  const { inputbcolor, placeholder, type, size } = props;
  // console.log(inputbcolor, placeholder);

  return (
    <div>
      <input
        // className="input"
        className={`${inputbcolor} ${size} input`}
        placeholder={placeholder}
        onChange={props.onChange}
        type={type}
      />
    </div>
  );
}

InputTextView.propTypes = {
  inputText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["text", "email", "password"]),
  placeholder: PropTypes.string,
  inputbcolor: PropTypes.oneOf(["grey", "white"]),
  align: PropTypes.oneOf(["left", "right", "center"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

InputTextView.defaultProps = {
  inputText: "ABCD",
  placeholder: "Enter Data",
  align: "left",
  inputbcolor: "white",
  size: "sm",
};

export default InputTextView;

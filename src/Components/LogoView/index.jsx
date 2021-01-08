import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import TextView from "../TextView";

function LogoView(props) {
  const { text, title } = props;
  return (
    <div className={`logo ${title}`}>
      <TextView text={text} title={title} align="center" />

      {/* {props.stringProp} */}
    </div>
  );
}

LogoView.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
};

LogoView.defaultProps = {
  text: "Instagram",
};

export default LogoView;

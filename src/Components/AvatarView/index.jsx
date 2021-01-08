import React from "react";
import "./index.css";
import PropTypes from "prop-types";

function AvatarView(props) {
  const { src, title, alt } = props;
  console.log(src);
  return (
    <div>
      <img src={src} className={`${alt} ${title} ${src}`} />
    </div>
  );
}

AvatarView.propTypes = {
  title: PropTypes.string,
  alt: PropTypes.string,
  // role: PropTypes.oneOf(["presentation"]),
  color: PropTypes.string, // default: 'secondary'
  src: PropTypes.string,
  className: PropTypes.string,
};

export default AvatarView;

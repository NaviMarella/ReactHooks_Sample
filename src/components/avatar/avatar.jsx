import React from "react";

import "./avatar.css";

const Avatar = ({ url, name }) => {
  return (
    <div>
      <img src={url} alt={`${name} avatar`} className={"image_avatar"} />
    </div>
  );
};

export default Avatar;

import React from "react";
const CardPost = ({ data }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.body}</p>
      </div>
    </div>
  );
};

export default CardPost;

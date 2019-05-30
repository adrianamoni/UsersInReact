import React from "react";
const CardInfo = ({ data }) => {
  return (
    <div className="card" style={this.cardStyle}>
      <div className="card-header">
        <h2>{data.name}</h2>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{data.phone}</li>
        <li className="list-group-item">{data.website}</li>
        <li className="list-group-item">{data.email}</li>
        <li className="list-group-item">
          {data.company ? data.company.catchPhrase : <span>Loading...</span>}
        </li>
      </ul>
    </div>
  );
};

export default CardInfo;

import React from "react";
import "../../App.css";

function Card({ imageUrl, title, text, buttonText, buttonUrl, customStyles }) {
  return (
    <div className="card"> {/* Apply the custom CSS class "custom-card" */}
      <img src={imageUrl} className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title title-font">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;

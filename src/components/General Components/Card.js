import React from "react";

function Card({ imageUrl, title, text, cardWidth, cardHeight, imageWidth, imageHeight }) {
  return (
    <div className="card" style={{ width: cardWidth, height: cardHeight }}>
      <img
        src={imageUrl}
        className="card-img-top"
        alt="Card"
        style={{ width: imageWidth, height: imageHeight, objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title title-font">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;

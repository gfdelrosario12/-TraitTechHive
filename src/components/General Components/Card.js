import React from "react";

function Card({ imageUrl, cardWidth, cardHeight, imageHeight, imageWidth, children }) {
  return (
    <div
      className="card custom-card card-img-border"
      style={{ width: cardWidth, height: cardHeight, backgroundColor: 'inherit' }}
    >
      <img
        src={imageUrl}
        className="card-img-top"
        alt="Card"
        style={{ height: imageHeight, width: imageWidth, objectFit: "cover" }}
      />
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;
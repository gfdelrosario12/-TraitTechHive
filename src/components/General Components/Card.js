import React from "react";

function Card({ imageUrl, cardWidth, cardHeight, imageHeight, imageWidth, children }) {
  return (
    <div
      className="container-fluid card custom-card card-img-border d-flex align-items-center justify-content-center m-2"
      style={{ width: cardWidth, height: cardHeight, backgroundColor: 'inherit', position: 'relative' }}
    >
      <img
        src={imageUrl}
        className="card-img-top"
        alt="Card"
        style={{ height: imageHeight, width: imageWidth, objectFit: "cover" }}
      />
      <div className="card-body d-flex align-items-center justify-content-center text-center">
        {children}
      </div>
    </div>
  );
}

export default Card;

import React from "react";

function CardConent({ imageUrl, title, text, cardWidth, cardHeight, imageWidth, imageHeight }) {
  return (
    <div className="card my-2 bg-transparent" style={{ width: cardWidth, height: cardHeight }}>
      <div className="row g-0">
        <div className="col-7 card-side-img-border">
          <img
            src={imageUrl}
            className="img-fluid rounded-start"
            alt="Card"
            style={{ width: imageWidth, height: imageHeight, objectFit: "cover" }}
          />
        </div>
        <div className="col">
          <div className="card-body">
            <h5 className="fs-3 title-font card-title">{title}</h5>
            <p className="normal-font fs-5 card-text">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardConent;

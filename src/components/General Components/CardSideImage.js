import React from "react";

function CardSideImage({ imageUrl, cardWidth, cardHeight, imageWidth, imageHeight, children }) {
  return (
    <div className="card my-2 card-responsive" style={{ width: cardWidth, height: cardHeight, backgroundColor: 'inherit' }}>
      <div className="row g-0 flex-wrap flex-md-wrap">
        <div className="col-4 col-md-4 card-side-img-border d-flex align-items-center justify-content-center">
          <img
            src={imageUrl}
            className="img-fluid rounded-start"
            alt="Card"
            style={{ width: imageWidth, height: imageHeight, objectFit: "cover" }}
          />
        </div>
        <div className="col-8 col-md-8">
          <div className="card-body text-container" style={{ backgroundColor: 'inherit' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSideImage;

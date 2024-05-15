import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <IoIosArrowBack class="arrows" style={{ color: "black" }} />
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <IoIosArrowForward class="arrows" style={{ color: "black" }} />
    </div>
  );
}

function CardSlider({ cards }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index}>
          <Link to={`${card.url}`} style={{ textDecoration: "none" }}>
            <Card
              className="p-4"
              cardWidth={card.cardWidth}
              cardHeight="340px"
              imageWidth="100%"
              imageHeight="230px"
              imageUrl={card.imageUrl}
            >
              <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <h5 className="card-title title-font text-center mb-3">{card.title}</h5>
                <p className="normal-text text-center">{card.text}</p>
              </div>
            </Card>
          </Link>
        </div>
      ))}
    </Slider>
  );
}

export default CardSlider;

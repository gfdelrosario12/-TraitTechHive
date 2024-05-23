import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <IoIosArrowBack class="arrows" style={{ color: "black" }} />
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, onClick } = props;
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index}>
          <Link to={`${card.url}`} style={{ textDecoration: "none" }}>
            <Card
              cardWidth="250px"
              cardHeight="380px"
              imageWidth="243px"
              imageHeight="300px"
              imageUrl={card.imageUrl}
            >
              <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <h5 className="card-title title-font text-center mb-3">{card.title}</h5>
              </div>
            </Card>
          </Link>
        </div>
      ))}
    </Slider>
  );
}

export default CardSlider;

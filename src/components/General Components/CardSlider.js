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
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <IoIosArrowBack class="arrows" style={{color:"black"}}/>
    </div>
  )
  }

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <IoIosArrowForward class="arrows" style={{color:"black"}}/>
    </div>
  )
}

function CardSlider({ cards }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to="next"/>,
    prevArrow: <SamplePrevArrow to="prev" />,
  };

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index}>
          <Link to={`${card.url}`} style={{ textDecoration: "none" }}>
            <Card
              cardWidth={card.cardWidth}
              cardHeight={card.cardHeight}
              imageWidth={card.imageWidth}
              imageHeight={card.imageHeight}
              imageUrl={card.imageUrl}
              title={card.title}
              text={card.text}
            />
          </Link>
        </div>
      ))}
    </Slider>
  );
}

export default CardSlider;

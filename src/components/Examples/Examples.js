import React from "react";
import HomeComponent from "../Home Components/HomeComponent";
import CardSlider from "../General Components/CardSlider";
import smartPhonesImage from "../../assets/images/6.png";
import tabletsImage from "../../assets/images/7.png";
import laptopsImage from "../../assets/images/8.png";
import smartWatchesImage from "../../assets/images/9.png";
import eReadersImage from "../../assets/images/10.png";
import handheldImage from "../../assets/images/11.png";
import technicalImage from "../../assets/images/14.png";
import attitudesImage from "../../assets/images/15.png";
import learningImage from "../../assets/images/16.png";
import socialImage from "../../assets/images/17.png";

function Examples() {
  const deviceCards = [
    {
      url: "/examples/devices/smartphones",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl: smartPhonesImage,
      title: "Smartphones",
    },
    {
      url: "/examples/devices/tablets",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl: tabletsImage,
      title: "Tablets",
    },
    {
      url: "/examples/devices/laptops",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl: laptopsImage,
      title: "Laptop Computers",
    },
    {
      url: "/examples/devices/smartwatches",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl: smartWatchesImage,
      title: "Smartwatches",
    },
    {
      url: "/examples/devices/ereaders",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl: eReadersImage,
      title: "E-Readers",
    },
    {
      url: "/examples/devices/handheld",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl: handheldImage,
      title: "Handheld Gaming Consoles",
    },
  ];

  const digitalTraits = [
    {
      url: "/examples/traits/technical",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl: technicalImage,
      title: "Technical Skills",
    },
    {
      url: "/examples/traits/attitudes",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl: attitudesImage,
      title: "Attitudes and Behaviors",
    },
    {
      url: "/examples/traits/learning",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl: learningImage,
      title: "Learning and Information Processing",
    },
    {
      url: "/examples/traits/social",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl: socialImage,
      title: "Social and Communication Skills",
    },
  ];

  return (
    <div>
      <HomeComponent>
        <h1 className="fs-5 title-font my-3">Devices</h1>
        <CardSlider cards={deviceCards} />
        <h1 className="fs-5 title-font my-3">Digital Traits</h1>
        <CardSlider cards={digitalTraits} />
      </HomeComponent>
    </div>
  );
}

export default Examples;

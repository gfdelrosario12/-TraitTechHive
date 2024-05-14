import React from "react";
import HomeComponent from "../Home Components/HomeComponent";
import CardSlider from "../General Components/CardSlider";

function Examples() {
  const deviceCards = [
    {
      url: "/examples/devices/smartphones",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl:
        "https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg",
      title: "Smartphones",
    },
    {
      url: "/examples/devices/tablets",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl:
        "https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg",
      title: "Tablets",
    },
    {
      url: "/examples/devices/laptops",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl:
        "https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg",
      title: "Laptop Computers",
    },
    {
      url: "/examples/devices/smartwatches",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl:
        "https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg",
      title: "Smartwatches",
    },
    {
      url: "/examples/devices/ereaders",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl:
        "https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg",
      title: "E-Readers",
    },
    {
      url: "/examples/devices/handheld",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl:
        "https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg",
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
      imageUrl: "https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg",
      title: "Technical Skills",
    },
    {
      url: "/examples/traits/attitudes",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl: "https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg",
      title: " Attitudes and Behaviors",
    },
    {
      url: "/examples/traits/learning",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl: "https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg",
      title: "Learning and Information Processing",
    },
    {
      url: "/examples/traits/social",
      cardWidth: "240px",
      cardHeight: "250px",
      imageWidth: "235px",
      imageHeight: "200px",
      imageUrl: "https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg",
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

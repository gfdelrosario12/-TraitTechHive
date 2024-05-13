import React, { useState } from "react";
import CardSideImage from "../General Components/CardSideImage";
import { Link } from "react-router-dom";

function User() {
  // State to hold the currently selected profile data
  const [profileData, setProfileData] = useState({
    name: "Gladwin Del Rosario",
    imageUrl: "https://avatars.githubusercontent.com/u/63576502?v=4",
  });

  // Function to handle card click and update profile data
  const handleCardClick = (name, imageUrl) => {
    setProfileData({ name, imageUrl });
  };

  return (
    <div>
      <div className="d-flex flex-row">
        <div className="mx-1">
          <img
            src={profileData.imageUrl}
            className="rounded-circle"
            alt={profileData.name}
          />
        </div>
        <div className="mx-3">
          <h1 className="fs-5 title-font">{profileData.name}</h1>
        </div>
      </div>

      <div>
        <h1 className="fs-5 title-font mt-3">Latest Learned</h1>
        <div>
            <CardSideImage
              cardWidth="240px"
              cardHeight="110px"
              imageWidth="250px"
              imageHeight="105px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
              title="Gladwin Del Rosario"
              text="sample text"
              onClick={() =>
                handleCardClick("Test", "https://example.com/image1.jpg")
              }
            />
        </div>
        <div>
            <CardSideImage
              cardWidth="240px"
              cardHeight="110px"
              imageWidth="250px"
              imageHeight="105px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
              title="Gladwin Del Rosario"
              text="sample text"
              onClick={() =>
                handleCardClick("Test", "https://example.com/image2.jpg")
              }
            />
        </div>
        <div>
            <CardSideImage
              cardWidth="240px"
              cardHeight="110px"
              imageWidth="250px"
              imageHeight="105px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
              title="Gladwin Del Rosario"
              text="sample text"
              onClick={() =>
                handleCardClick("Test", "https://example.com/image2.jpg")
              }
            />
        </div>
        <div>
            <CardSideImage
              cardWidth="240px"
              cardHeight="110px"
              imageWidth="250px"
              imageHeight="105px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
              title="Gladwin Del Rosario"
              text="sample text"
              onClick={() =>
                handleCardClick("Test", "https://example.com/image2.jpg")
              }
            />
        </div>
      </div>
    </div>
  );
}

export default User;

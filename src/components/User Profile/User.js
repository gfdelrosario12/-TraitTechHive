import React from "react";
import Card from "../General Components/Card";
import CardSideImage from "../General Components/CardSideImage";
import { Link } from "react-router-dom";

function User() {
  return (
    <div>
      <div className="d-flex flex-row">
        <div className="mx-1">
          <img
            src="https://avatars.githubusercontent.com/u/63576502?v=4"
            className="rounded-circle"
            alt="Gladwin Del Rosario"
          />
        </div>

        <div className="mx-3">
          <h1 className="fs-5 title-font">Gladwin Del Rosario</h1>
          <h6 className="fs-6 normal-text">You're doing great, keep practicing!</h6>
        </div>
      </div>

      <div>
        <h1 className="fs-5 title-font mt-3">Latest Learned</h1>
        <div>
          <Link to="/productivity-masterclass" className="link-style">
            <Card
              cardWidth="240px"
              cardHeight="210px"
              imageWidth="235px"
              imageHeight="100px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
              title="Productivity Masterclass"
              text="sample text"
            />
          </Link>
        </div>
        <div className="mt-3">
          <Link to="/productivity-masterclass" className="link-style">
            <CardSideImage
              cardWidth="240px"
              cardHeight="110px"
              imageWidth="250px"
              imageHeight="105px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
              title="Productivity Masterclass"
              text="sample text"
            />
          </Link>
        </div>
        <div>
          <Link to="/productivity-masterclass" className="link-style">
            <CardSideImage
              cardWidth="240px"
              cardHeight="110px"
              imageWidth="250px"
              imageHeight="105px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
              title="Productivity Masterclass"
              text="sample text"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default User;

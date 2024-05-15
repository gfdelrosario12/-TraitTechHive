import React from "react";
import HomeComponent from "./Home Components/HomeComponent";
import Card from "./General Components/Card";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <HomeComponent>
        <Link to = "/device" className="black-underline"><h1 className="fs-5 title-font my-4">Device</h1></Link>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="mx-2">
          <Card
              cardWidth="240px"
              cardHeight="220px"
              imageWidth="235px"
              imageHeight="90px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
            >
              <div>
                <h3 className="card-title title-font">Productivity Masterclass</h3>
                <p className="normal-text">Sample text</p>
              </div>
            </Card>
          </div>
          <div className="mx-2">
          <Card
              cardWidth="240px"
              cardHeight="220px"
              imageWidth="235px"
              imageHeight="90px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
            >
              <div>
                <h3 className="card-title title-font">Productivity Masterclass</h3>
                <p className="normal-text">Sample text</p>
              </div>
            </Card>
          </div>
          <div className="mx-2">
          <Card
              cardWidth="240px"
              cardHeight="220px"
              imageWidth="235px"
              imageHeight="90px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
            >
              <div>
                <h3 className="card-title title-font">Productivity Masterclass</h3>
                <p className="normal-text">Sample text</p>
              </div>
            </Card>
          </div>
        </div>
        <Link to ="/traits" className="black-underline"><h1 className="fs-5 title-font my-4">Digital Traits</h1></Link>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="mx-2">
          <Card
              cardWidth="240px"
              cardHeight="220px"
              imageWidth="235px"
              imageHeight="90px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
            >
              <div>
                <h3 className="card-title title-font">Productivity Masterclass</h3>
                <p className="normal-text">Sample text</p>
              </div>
            </Card>
          </div>
          <div className="mx-2">
          <Card
              cardWidth="240px"
              cardHeight="220px"
              imageWidth="235px"
              imageHeight="90px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
            >
              <div>
                <h3 className="card-title title-font">Productivity Masterclass</h3>
                <p className="normal-text">Sample text</p>
              </div>
            </Card>
          </div>
          <div className="mx-2">
          <Card
              cardWidth="240px"
              cardHeight="220px"
              imageWidth="235px"
              imageHeight="90px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
            >
              <div>
                <h3 className="card-title title-font">Productivity Masterclass</h3>
                <p className="normal-text">Sample text</p>
              </div>
            </Card>
          </div>
        </div>
      </HomeComponent>
    </div>
  );
}

export default Home;
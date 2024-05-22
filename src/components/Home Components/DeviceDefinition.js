import HomeComponent from "./HomeComponent";
import CardSideImage from "../General Components/CardSideImage";
import mobile from "../../assets/images/16.png";
import { Link } from "react-router-dom";
import Card from "../General Components/Card";
import portability from "../../assets/images/17.png";
import wireless from "../../assets/images/18.png";
import communication from "../../assets/images/19.png";
import testing from "../../assets/images/20.png";
import webBrowsing from "../../assets/images/21.png";
import application from "../../assets/images/22.png";
import lackOfSocialSkills from "../../assets/images/23.png";
import safetyBasics from "../../assets/images/24.png";
import evolvingLanguage from "../../assets/images/25.png";

function DeviceDefinition() {
  return (
    <HomeComponent>
      <Link to="/device" className="black-underline">
        <h1 className="fs-5 title-font my-3">Device</h1>
      </Link>

      <h5 className="fs-3 text-center card-title title-font">Exploring Mobile Devices</h5>
      <CardSideImage
        cardWidth="100%"
        cardHeight="auto"
        imageWidth="100%"
        imageHeight="auto"
        imageUrl={mobile}
      >
        <div className="text-center">
          <p className="card-text fs-4 normal-text">
            Mobile device is a general term for any handheld computer or smartphone. Tablets,
            e-readers, smartphones, PDAs, portable music players, smartwatches, and fitness trackers
            with smart capabilities are all mobile devices.
          </p>
        </div>
      </CardSideImage>
      <h5 className="fs-3 text-center card-title title-font">Characteristics of Mobile Devices</h5>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="mx-3">
            <Card
              cardWidth="200px"
              cardHeight="270px"
              imageWidth="190px"
              imageHeight="175px"
              imageUrl={portability}
            >
              <h5 className="card-title text-center">Portability and Small Size</h5>
            </Card>
        </div>
        <div className="mx-3 my-3">
            <Card
              cardWidth="200px"
              cardHeight="270px"
              imageWidth="190px"
              imageHeight="200px"
              imageUrl={wireless}
            >
              <h5 className="card-title text-center">Wireless</h5>
            </Card>
        </div>
        <div className="mx-3">
            <Card
              cardWidth="200px"
              cardHeight="270px"
              imageWidth="190px"
              imageHeight="200px"
              imageUrl={communication}
            >
              <h5 className="card-title text-center">Communication</h5>
            </Card>
        </div>
      </div>
      <h5 className="fs-3 text-center card-title title-font">Why do we use mobile devices?</h5>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="mx-3">
            <Card
              cardWidth="200px"
              cardHeight="270px"
              imageWidth="190px"
              imageHeight="200px"
              imageUrl={testing}
            >
              <h5 className="card-title text-center">Testing</h5>
            </Card>
        </div>
        <div className="mx-3 my-3">
            <Card
              cardWidth="200px"
              cardHeight="270px"
              imageWidth="190px"
              imageHeight="200px"
              imageUrl={webBrowsing}
            >
              <h5 className="card-title text-center">Web Browsing</h5>
            </Card>
        </div>
        <div className="mx-3">
            <Card
              cardWidth="200px"
              cardHeight="270px"
              imageWidth="190px"
              imageHeight="200px"
              imageUrl={application}
            >
              <h5 className="card-title text-center">Application</h5>
            </Card>
        </div>
      </div>
      <h5 className="fs-3 text-center card-title title-font">
        The downside of using mobile devices
      </h5>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="mx-3">
            <Card
              cardWidth="200px"
              cardHeight="270px"
              imageWidth="190px"
              imageHeight="175px"
              imageUrl={lackOfSocialSkills}
            >
              <h5 className="card-title text-center">Lack of Social Skills</h5>
            </Card>
        </div>
        <div className="mx-3 my-3">
            <Card
              cardWidth="200px"
              cardHeight="270px"
              imageWidth="190px"
              imageHeight="175px"
              imageUrl={safetyBasics}
            >
              <h5 className="card-title text-center">Safety Basics</h5>
            </Card>
        </div>
        <div className="mx-3">
            <Card
              cardWidth="200px"
              cardHeight="270px"
              imageWidth="190px"
              imageHeight="175px"
              imageUrl={evolvingLanguage} 
            >
              <h5 className="card-title text-center">Evolving Language</h5>
            </Card>
        </div>
      </div>
    </HomeComponent>
  );
}

export default DeviceDefinition;

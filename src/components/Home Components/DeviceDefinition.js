import HomeComponent from "./HomeComponent";
import CardSideImage from "../General Components/CardSideImage";
import mobile from "../../assets/images/16.png";
import { Link } from "react-router-dom";
import Card from "../General Components/Card";
import portability from "../../assets/images/17.png";
import wireless from "../../assets/images/18.png";
import communication from "../../assets/images/19.png";

function DeviceDefinition() {
  return (
    <HomeComponent>
      <Link to="/device" className="black-underline">
        <h1 className="fs-5 title-font my-3">Device</h1>
      </Link>

      <h5 className="fs-3 text-center card-title title-font">Exploring Mobile Devices</h5>
      <CardSideImage
        cardWidth="100%"
        cardHeight="250px"
        imageWidth="200px"
        imageHeight="240px"
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
          <Link to="/about" className="title-font">
          <Card
              cardWidth="200px"
              cardHeight="270px"
              imageWidth="190px"
              imageHeight="200px"
              imageUrl={portability}
            >
              <h5 className="card-title text-center">Portability and Small Size</h5>
            </Card>
          </Link>
        </div>
        <div className="mx-3 my-3">
          <Link to="/about" className="title-font">
          <Card
              cardWidth="200px"
              cardHeight="270px"
              imageWidth="190px"
              imageHeight="200px"
              imageUrl={wireless}
            >
              <h5 className="card-title text-center">Wireless</h5>
            </Card>
          </Link>
        </div>
        <div className="mx-3">
          <Link to="/about" className="title-font">
            <Card
              cardWidth="200px"
              cardHeight="270px"
              imageWidth="190px"
              imageHeight="200px"
              imageUrl={communication}
            >
              <h5 className="card-title text-center">Communication</h5>
            </Card>
          </Link>
        </div>
      </div>
    </HomeComponent>
  );
}

export default DeviceDefinition;
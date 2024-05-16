import HomeComponent from "./HomeComponent";
import bot from "../../assets/images/kumakaway.jpg";
import CardSideImage from "../General Components/CardSideImage";
import { Link } from "react-router-dom";

const TraitsDefinition = () => {
  return (
    <HomeComponent>
      <Link to="/traits" className="black-underline">
        <h1 className="fs-5 title-font my-3">Traits</h1>
      </Link>

      <h5 className="fs-3 my-3 text-center card-title title-font">Digital Traits</h5>
      <CardSideImage
        cardWidth="100%"
        cardHeight="170px"
        imageWidth="150px"
        imageHeight="164px"
        imageUrl={bot}
      >
        <div className="text-center">
          <p className="card-text fs-3 normal-text">
            An individual's attitudes, interests, social roles and other traits relates to his or
            her use of technology.
          </p>
        </div>
      </CardSideImage>
      <h5 className="fs-3 my-3 text-center card-title title-font">Characteristics of Mobile Devices</h5>
      <div className="d-flex flex-row justify-content-center align-items-center mx-3 my-3 flex-wrap">
          <h5 className="fs-5 card title-font py-2 px-2 m-2" style={{ width: "220px", textAlign: "center" }}>
            Always wanting to grow
          </h5>
          <h5 className="fs-5 card title-font py-2 px-2 m-2" style={{ width: "220px", textAlign: "center" }}>
            Embrace Diversity
          </h5>
          <h5 className="fs-5 card title-font py-2 px-2 m-2" style={{ width: "220px", textAlign: "center" }}>
            Global Approach
          </h5>
          <h5 className="fs-5 card title-font py-2 px-2 m-2" style={{ width: "220px", textAlign: "center" }}>
            Passionately explores an experiments
          </h5>
          <h5 className="fs-5 card title-font py-2 px-2 m-2" style={{ width: "220px", textAlign: "center" }}>
            Thrives is an agile environment
          </h5>
          <h5 className="fs-5 card title-font py-2 px-2 m-2" style={{ width: "220px", textAlign: "center" }}>
            Sharing is not just caring
          </h5>
          <h5 className="fs-5 card title-font py-2 px-2 m-2" style={{ width: "220px", textAlign: "center" }}>
            Data Driven
          </h5>
        </div>
    </HomeComponent>
  );
};

export default TraitsDefinition;
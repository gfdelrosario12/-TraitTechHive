import HomeComponent from "../Home Components/HomeComponent";
import QRCode from "../../assets/images/QR/qr-code.png";

const QR = () => {
  return (
    <HomeComponent>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="fs-3 title-font align-self-center my-5">Access the Quiz Below:</h1>
        <img
          src={QRCode}
          style={{ height: "300px", width: "300px" }}
          className="align-self-center"
        />
        <p className = "fs-4 normal-text black-underline my-5">https://bit.ly/TraitTechHive-Quiz</p>
      </div>
    </HomeComponent>
  );
};

export default QR;

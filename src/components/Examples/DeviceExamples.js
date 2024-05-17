import HomeComponent from "../Home Components/HomeComponent";
import { useParams } from "react-router-dom";
import CardConent from "../General Components/CardContent";
import smartPhonesImage from "../../assets/images/6.png";
import tabletsImage from "../../assets/images/7.png";
import laptopsImage from "../../assets/images/8.png";
import smartWatchesImage from "../../assets/images/9.png";
import eReadersImage from "../../assets/images/10.png";
import handheldImage from "../../assets/images/11.png";

const DeviceExamples = () => {
  const { title } = useParams();
  let titleContent;
  let subtextContent;
  let imageURL;

  switch (title) {
    case "smartphones":
      titleContent = "Smartphones";
      imageURL = smartPhonesImage;
      subtextContent =
        "The most popular because they are handheld and can fit in your pocket.";
      break;
    case "tablets":
      titleContent = "Tablets";
      imageURL = tabletsImage;
      subtextContent = "Tablets are great for creating presentations with apps that allow for multimedia elements like images, videos, and music.";
      break;
    case "laptops":
      titleContent = "Laptop Computers";
      imageURL = laptopsImage;
      subtextContent =
        "It give us the functionality of a desktop computer that we can take anywhere.";
      break;
    case "smartwatches":
      titleContent = "Smartwatches";
      imageURL = smartWatchesImage;
      subtextContent =
        "Smartwatches can receive notifications from your phone, such as text messages, emails, and social media updates.";
      break;
    case "ereaders":
      titleContent = "E-Readers";
      imageURL = eReadersImage;
      subtextContent =
        "E-readers are portable electronic devices designed specifically for reading digital books (e-books) and periodicals.";
      break;
    case "handheld":
      titleContent = "Handheld Gaming Consoles";
      imageURL = handheldImage;
      subtextContent =
        "Handheld gaming consoles are small, portable lectronic devices with built-in screens, controls, and speakers specifically designed for playing video games. Example is using nintendo switch";
      break;
    default:
      titleContent = "undefined";
      subtextContent = "undefined";
  }

  return (
    <div>
      <HomeComponent>
        <div className="m-4">
          <CardConent
            imageWidth="100%"
            imageHeight="100%"
            imageUrl={imageURL}
            title={titleContent}
            text={subtextContent}
          />
        </div>
      </HomeComponent>
    </div>
  );
};

export default DeviceExamples;
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
      imageURL = smartPhonesImage; // Corrected
      subtextContent =
        "The most popular because they are handheld and can fit in your pocket. It also helps us to stay connected due to wireless carriers. Smartphones can be distracting and can lead to procrastination if not used responsibly. It is important for students to develop healthy habits and set boundaries for smartphone use.";
      break;
    case "tablets":
      titleContent = "Tablets";
      imageURL = tabletsImage; // Corrected
      subtextContent = "Tablets are great for creating presentations with apps that allow for multimedia elements like images, videos, and music. Tablets are great for creating presentations with apps that allow for multimedia elements like images, videos, and music. Similar to smartphones, but in a larger display with more battery life. We can use tablets when presenting a PowerPoint and watching movie";
      break;
    case "laptops":
      titleContent = "Laptop Computers";
      imageURL = laptopsImage; // Corrected
      subtextContent =
        "give us the functionality of a desktop computer that we can take anywhere. Students can share documents and files online, collaborate in real-time, and communicate with classmates and teachers through email, video conferencing, and other online tools.";
      break;
    case "smartwatches":
      titleContent = "Smartwatches";
      imageURL = smartWatchesImage; // Corrected
      subtextContent =
        "Smartwatches can receive notifications from your phone, such as text messages, emails, and social media updates. This can help you stay connected with friends, family, and classmates without having to take your phone out of your pocket or bag all the time. Smartwatches can track your steps, heart rate, and calories burned. This can help you stay motivated to reach your fitness goals.";
      break;
    case "ereaders":
      titleContent = "E-Readers";
      imageURL = eReadersImage; // Corrected
      subtextContent =
        "E-readers are portable electronic devices designed specifically for reading digital books (e-books) and periodicals. While other devices like tablets and smartphones can also display ebooks, e-readers prioritize features that make reading a more comfortable and enjoyable experience. E-readers are lightweight and compact, making them easy to carry around. You can hold hundreds or even thousands of ebooks on a single e-reader, which is much more convenient than carrying around multiple physical books.";
      break;
    case "handheld":
      titleContent = "Handheld Gaming Consoles";
      imageURL = handheldImage; // Corrected
      subtextContent =
        "Handheld gaming consoles are small, portable electronic devices with built-in screens, controls, and speakers specifically designed for playing video games. Example is using nintendo switch";
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
import HomeComponent from "../Home Components/HomeComponent";
import { useParams } from "react-router-dom";
import CardConent from "../General Components/CardContent";
import technicalImage from "../../assets/images/14.png";
import attitudesImage from "../../assets/images/15.png";
import learningImage from "../../assets/images/16.png";
import socialImage from "../../assets/images/17.png";

const TraitsExamples = () => {
  const { title } = useParams();
  let titleContent;
  let subtextContent;
  let imageURL;

  switch (title) {
    case "technical":
      titleContent = "Technical Skills";
      subtextContent = "Ability to identify and solve technological issues independently.";
      imageURL = technicalImage;
      break;
    case "attitudes":
      titleContent = "Attitudes and Behaviors";
      subtextContent = "Describes how at ease someone is using new technologies and adapting to them.";
      imageURL = attitudesImage;
      break;
    case "learning":
      titleContent = "Learning and Information Processing";
      subtextContent = "Ability to find, evaluate, and use information from digital sources effectively.";
      imageURL = learningImage;
      break;
    case "social":
      titleContent = "Social and Communication Skills";
      subtextContent = "Ability to communicate effectively through digital channels like email, social media, and messaging apps.";
      imageURL = socialImage;
      break;
    default:
      titleContent = "undefined";
      subtextContent = "undefined";
      imageURL = "https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg";
      break;
  }

  return (
    <div>
      <HomeComponent>
        <div className="m-4">
          <CardConent
            imageWidth="100%"
            imageHeight="500px"
            imageUrl={imageURL}
            title={titleContent}
            text={subtextContent}
          />
        </div>
      </HomeComponent>
    </div>
  );
};

export default TraitsExamples;

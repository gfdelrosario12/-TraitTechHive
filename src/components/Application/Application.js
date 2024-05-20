import HomeComponent from "../Home Components/HomeComponent";
import Card from "../General Components/Card";
import age from "../../assets/images/46.png";
import literacySkills from "../../assets/images/47.png";
import creativity from "../../assets/images/48.png";
import social from "../../assets/images/49.png";
import storytelling from "../../assets/images/50.png";
import interactive from "../../assets/images/51.png";

function Application() {
  const devices = [
    {
      href: "https://www.pna.gov.ph/articles/1223441",
      imageUrl: age,
      title: "Age-appropriateness",
      subtext:
        "Select apps and content specifically designed for young children, considering their developmental stage and interests.",
    },
    {
      href: "https://childhope.org.ph/importance-of-technology-in-philippine-education/",
      imageUrl: literacySkills,
      title: "Literacy Skills",
      subtext:
        "Use interactive apps for learning letters, sounds, sight words, or creating simple stories.",
    },
    {
      href: "https://www.myprivatetutor.com.ph/blog/digital-learning-on-the-philippine-education-system",
      imageUrl: creativity,
      title: "Creativity and Exploration",
      subtext:
        "Provide access to drawing apps, simple music creation tools, or educational games that encourage problem-solving and critical thinking.",
    },
    {
      href: "https://www.myprivatetutor.com.ph/blog/digital-learning-on-the-philippine-education-system",
      imageUrl: social,
      title: "Social-Emotional Learning",
      subtext:
        "Explore apps that focus on identifying emotions, managing feelings, or social interaction skills in a safe and controlled environment.",
    },
  ];

  const traits = [
    {
      href: "https://www.govtech.com/education/k-12/iste-identifies-7-traits-of-digital-learners.html",
      imageUrl: storytelling,
      title: "Digital Storytelling",
      subtext:
        " Use simple apps or software to allow children to create short digital stories with pictures, sounds, and narration.      ",
    },
    {
      href: "https://www.umassglobal.edu/news-and-events/blog/generation-z-traits-teachers-need-to-adapt-to",
      imageUrl: interactive,
      title: "Interactive Games and Apps",
      subtext:
        "Carefully chosen apps that focus on problem-solving, creativity, or collaboration can be beneficial learning tools. ",
    },
  ];
  return (
    <div>
      <HomeComponent>
        <h1 className="fs-5 title-font my-4">Device</h1>
        <h1 className="fs-3 title-font my-1 text-center">Teaching Concept</h1>
        <div className="d-flex flex-row justify-content-center align-items-center mx-3 my-3 flex-wrap">
          {devices.map((card) => (
            <div className="m-2">
              <Card
                cardWidth="350px"
                cardHeight="500px"
                imageWidth="275px"
                imageHeight="300px"
                imageUrl={card.imageUrl}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <h3 className="title-font">{card.title}</h3>
                  <p className="normal-font">{card.subtext}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <h1 className="fs-5 title-font my-4">Digital Traits</h1>
        <div className="d-flex flex-row justify-content-center align-items-center mx-3 my-3 flex-wrap">
          {traits.map((card) => (
            <div className="mx-2">
              <Card
                cardWidth="300px"
                cardHeight="500px"
                imageWidth="275px"
                imageHeight="300px"
                imageUrl={card.imageUrl}
              >
                <div>
                  <h3 className="title-font">{card.title}</h3>
                  <p className="normal-font">{card.subtext}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </HomeComponent>
    </div>
  );
}

export default Application;

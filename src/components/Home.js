import HomeComponent from "./Home Components/HomeComponent";
import SearchBar from "./Home Components/SearchBar";
import Tags from "./General Components/Tags";
import { FaCode } from "react-icons/fa";
import { PiPaintBrushHousehold } from "react-icons/pi";
import { GoGoal } from "react-icons/go";
import { CiCalculator1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import Card from "./General Components/Card";

function Home() {
  return (
    <div>
      <HomeComponent>
        <SearchBar />
        <div className="tags d-flex justify-content-evenly align-items-center">
          <div className="mx-2">
            <Tags tagTitle="Coding" color="yellow">
              <FaCode />
            </Tags>
          </div>
          <div className="mx-2">
            <Tags tagTitle="Design" color="red">
              <PiPaintBrushHousehold />
            </Tags>
          </div>
          <div className="mx-2">
            <Tags tagTitle="Marketing" color="green">
              <GoGoal />
            </Tags>
          </div>
          <div className="mx-2">
            <Tags tagTitle="Accounting" color="blue">
              <CiCalculator1 />
            </Tags>
          </div>
          <div className="mx-2">
            <Link to="/" className="normal-text underline fs-6">
              See All
            </Link>
          </div>
        </div>
        <h1 className="fs-5 title-font my-4">Recent Search</h1>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="mx-2">
            <Card
              cardWidth="240px"
              cardHeight="200px"
              imageWidth="235px"
              imageHeight="90px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
              title="Productivity Masterclass"
              text="sample text"
            />
          </div>
          <div className="mx-2">
            <Card
              cardWidth="240px"
              cardHeight="200px"
              imageWidth="235px"
              imageHeight="90px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
              title="Productivity Masterclass"
              text="sample text"
            />
          </div>
          <div className="mx-2">
            <Card
              cardWidth="240px"
              cardHeight="200px"
              imageWidth="235px"
              imageHeight="90px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
              title="Productivity Masterclass"
              text="sample text"
            />
          </div>
        </div>
      </HomeComponent>
    </div>
  );
}

export default Home;

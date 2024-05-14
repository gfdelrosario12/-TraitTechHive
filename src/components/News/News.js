import HomeComponent from '../Home Components/HomeComponent';
import Card from '../General Components/Card';

function News() {
    return (
      <div>
        <HomeComponent>
      <h1 className="fs-5 title-font my-4">Device</h1>
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
        <h1 className="fs-5 title-font my-4">Digital Traits</h1>
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
  
  export default News;
import HomeComponent from "../Home Components/HomeComponent";
import Card from "../../components/General Components/Card"
import image1 from "../../assets/images/gallery/26.png";
import image2 from "../../assets/images/gallery/27.png";
import image3 from "../../assets/images/gallery/28.png";
import image4 from "../../assets/images/gallery/29.png";
import image5 from "../../assets/images/gallery/30.png";
import image6 from "../../assets/images/gallery/31.png";
import image7 from "../../assets/images/gallery/32.png";
import image8 from "../../assets/images/gallery/33.png";
import image9 from "../../assets/images/gallery/34.png";
import image10 from "../../assets/images/gallery/35.png";
import image11 from "../../assets/images/gallery/36.png";
import image12 from "../../assets/images/gallery/37.png";
import image13 from "../../assets/images/gallery/38.png";
import image14 from "../../assets/images/gallery/39.png";
import image15 from "../../assets/images/gallery/40.png";
import image16 from "../../assets/images/gallery/41.png";
import image17 from "../../assets/images/gallery/42.png";
import image18 from "../../assets/images/gallery/43.png";
import image19 from "../../assets/images/gallery/44.png";
import image20 from "../../assets/images/gallery/45.png";

function Gallery() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
  ];
  return (
    <div>
      <HomeComponent>
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          {images.map((image, index) => (
            <div className="m-3">
              <Card
                imageUrl={image}
                cardWidth="150px"
                cardHeight="160px"
                imageWidth="120px"
                imageHeight="140px"
              />
            </div>
          ))}
        </div>
      </HomeComponent>
    </div>  
  );
}

export default Gallery;

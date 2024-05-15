import React, { useState } from "react";
import CardSideImage from "../General Components/CardSideImage";
import { connect } from "react-redux";
import Iana from "../../assets/images/reporters/Iana.png";
import Stephanie from "../../assets/images/reporters/Stephanie.png";
import Chester from "../../assets/images/reporters/Chester.png";
import Rhona from "../../assets/images/reporters/RHONA.png";
import { Link } from "react-router-dom";
import HomeComponent from "../Home Components/HomeComponent";

const Peers = ({ value1, value2, value3, changeValues }) => {
  const [clickedCard, setClickedCard] = useState(null);

  const cards = [
    { id: 1, title: "Camina Juliana Bautista", imageUrl: Iana, subtext: "Head" },
    { id: 2, title: "Stephanie Amor Bartolay", imageUrl: Stephanie, subtext: "Research Staff" },
    { id: 3, title: "Chester Wolf C. Enriquez", imageUrl: Chester, subtext: "Tech Staff" },
    { id: 4, title: "Rhona May Butalon", imageUrl: Rhona, subtext: "Research Staff" },
  ];

  const handleCardClick = (card) => {
    changeValues({ value1: card.title, value2: card.imageUrl, value3: card.subtext });
    setClickedCard(card.id === clickedCard ? null : card.id);
  };

  return (
    <HomeComponent>
      <div>
        <Link to="/peers" className="black-underline">
          <h1 className="fs-5 title-font my-4">My Peers:</h1>
        </Link>

        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          {cards.map((card, index) => (
            <div className="mx-3">
              <button onClick={() => handleCardClick(card)} className="w-100">
                <CardSideImage
                  cardWidth="240px"
                  cardHeight="110px"
                  imageWidth="250px"
                  imageHeight="105px"
                  imageUrl={card.imageUrl}
                >
                  <h5 className="fs-6 card-title title-font">{card.title}</h5>
                  <p className="card-text normal-text">{card.subtext}</p>
                </CardSideImage>
              </button>
            </div>
          ))}
        </div>
      </div>
    </HomeComponent>
  );
};

const mapStateToProps = (state) => ({
  value1: state.value1,
  value2: state.value2,
  value3: state.value3,
});

const mapDispatchToProps = (dispatch) => ({
  changeValues: (values) => dispatch({ type: "CHANGE_VALUES", payload: values }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Peers);
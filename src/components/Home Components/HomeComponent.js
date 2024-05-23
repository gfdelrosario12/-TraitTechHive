import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import "../../App.css";
import User from "../User Profile/User";
import SearchBar from "./SearchBar";
import Tags from "../General Components/Tags";
import { FaCode } from "react-icons/fa";
import { PiPaintBrushHousehold } from "react-icons/pi";
import { GoGoal } from "react-icons/go";
import { CiCalculator1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import CardSideImage from "../General Components/CardSideImage";
import { connect } from 'react-redux';
import Iana from "../../assets/images/reporters/Iana.png";
import Stephanie from "../../assets/images/reporters/Stephanie.png";
import Chester from "../../assets/images/reporters/Chester.png";
import Rhona from "../../assets/images/reporters/RHONA.png";

const HomeComponent = ({children, value1, value2, value3, changeValues}) => {
  const [clickedCard, setClickedCard] = useState(null);

  const cards = [
    { id: 1, title: "Camina Juliana Bautista", imageUrl: Iana, subtext: "Head" },
    { id: 2, title: "Stephanie Amor Bartolay", imageUrl: Stephanie, subtext: "Research Staff" },
    { id: 3, title: "Chester Wolf C. Enriquez", imageUrl: Chester, subtext: "Tech Staff" },
    { id: 4, title: "Rhona May Butalon", imageUrl: Rhona, subtext: "Field Staff" }
  ];

  const handleCardClick = (card) => {
    changeValues({ value1: card.title, value2: card.imageUrl, value3: card.subtext });
    setClickedCard(card.id === clickedCard ? null : card.id);
  };

  return (
    <div className="home-container">
      <div id="nav">
        <Navigation />
      </div>
      <div id="content">
        <div className="search-container d-flex flex-row justify-content-center align-items-center">
          <SearchBar />
        </div>
        <div className="tags d-flex justify-content-evenly align-items-center">
          <div className="mx-2">
            <Tags tagTitle="Coding" backgroundColor="#f4d07f">
              <FaCode />
            </Tags>
          </div>
          <div className="mx-2">
            <Tags tagTitle="Design" backgroundColor="#a6c7f1">
              <PiPaintBrushHousehold />
            </Tags>
          </div>
          <div className="mx-2">
            <Tags tagTitle="Marketing" backgroundColor="#fee5f2">
              <GoGoal />
            </Tags>
          </div>
          <div className="mx-2">
            <Tags tagTitle="Accounting" backgroundColor="#92abb1">
              <CiCalculator1 />
            </Tags>
          </div>
          <div className="mx-2">
            <Link to="/" className="normal-text underline fs-6">
              See All
            </Link>
          </div>
        </div>
        {children}
      </div>
      <div id="user">
        <User />
      </div>
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offCanvasLeft"
        aria-labelledby="offCanvasLeftLabel"
      >
        <div className="offcanvas-body">
          <Navigation />
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offCanvasRight"
        aria-labelledby="offCanvasRightLabel"
      >
        <div className="offcanvas-body-custom-bg p-4">
        <div>
      <div className="d-flex flex-row align-items-center mb-3">
        <div className="mx-1">
          <img src={value2} className="rounded-circle" alt={value1} />
        </div>
        <div className="mx-3">
          <h1 className="fs-4 title-font">{value1}</h1>
          <p>{value3}</p>
        </div>
      </div>

      <div>
        <Link to="/peers" className="black-underline">
          <h1 className="fs-5 title-font my-4">My Peers:</h1>
        </Link>
        
        <div>
          {cards.map(card => (
            clickedCard !== card.id && (
              <div key={card.id}>
                <button onClick={() => handleCardClick(card)}>
                  <CardSideImage
                    cardWidth="300px"
                    cardHeight="110px"
                    imageWidth="100px"
                    imageHeight="104px"
                    imageUrl={card.imageUrl}
                  >
                    <h5 className="fs-6 card-title title-font">{card.title}</h5>
                    <p className="card-text normal-text">{card.subtext}</p>
                  </CardSideImage>
                </button>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  value1: state.value1,
  value2: state.value2,
  value3: state.value3
});

const mapDispatchToProps = dispatch => ({
  changeValues: values => dispatch({ type: 'CHANGE_VALUES', payload: values })
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

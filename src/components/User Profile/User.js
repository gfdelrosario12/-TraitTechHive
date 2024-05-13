import React, { useState } from "react";
import CardSideImage from "../General Components/CardSideImage";
import { connect } from 'react-redux';

const User = ({ value1, value2, changeValues }) => {

  const handleCardClick = (name, url) => {
    const textElement = document.getElementById('text-element');
    const iamgeElement = document.getElementById('text-element');
    textElement.textContent = 'New Text'; // Update the text content here
  };

  return (
    <div>
      <div className="d-flex flex-row align-items-center mb-3">
        <div className="mx-1">
          <img src={value2} className="rounded-circle" alt={value1} />
        </div>
        <div className="mx-3">
          <h1 className="fs-5 title-font">{value1}</h1>
        </div>
      </div>

      <div>
        <h1 className="fs-5 title-font my-4">Latest Learned</h1>
        <div>
          <button onClick={() => changeValues({ value1: "Test", value2: "https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg" })}>
            <CardSideImage
              cardWidth="240px"
              cardHeight="110px"
              imageWidth="250px"
              imageHeight="105px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
              title="Gladwin Del Rosario"
              text="sample text"
            />
          </button>
        </div>
        <div>
          <button onClick={() => changeValues({ value1: "Test", value2: "https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg" })}>
            <CardSideImage
              cardWidth="240px"
              cardHeight="110px"
              imageWidth="250px"
              imageHeight="105px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
              title="Gladwin Del Rosario"
              text="sample text"
            />
          </button>
        </div>
        <div>
          <button onClick={() => changeValues({ value1: "Test", value2: "https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg" })}>
            <CardSideImage
              cardWidth="240px"
              cardHeight="110px"
              imageWidth="250px"
              imageHeight="105px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
              title="Gladwin Del Rosario"
              text="sample text"
            />
          </button>
        </div>
        <div>
          <button onClick={() => changeValues({ value1: "Test", value2: "https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg" })}>
            <CardSideImage
              cardWidth="240px"
              cardHeight="110px"
              imageWidth="250px"
              imageHeight="105px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
              title="Gladwin Del Rosario"
              text="sample text"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  value1: state.value1,
  value2: state.value2
});

const mapDispatchToProps = dispatch => ({
  changeValues: values => dispatch({ type: 'CHANGE_VALUES', payload: values })
});

export default connect(mapStateToProps, mapDispatchToProps)(User);

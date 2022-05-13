import React from "react";
import "./Card.css";
function Card(props) {

  return (
    <div
      id="image-container"
      className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 "
    >
      {props.cards.map((card) => (
        <div className="col">
          <div
            className="card bg-dark text-white text-start p-3"
            key={card.id} 
          >
            <h2 className="card-title my-3 ">{card.title}</h2>
            <img className="card-img" src={card.image} alt="nice place" />
            <div className="overlay">
              <p className="card-img-desc">{card.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

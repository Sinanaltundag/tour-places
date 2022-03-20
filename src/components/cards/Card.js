import React from "react";
import "./Card.css";
function Card(props) {
  /* const [isOver,setIsOver]= useState(false)

const handleOver=(em)=>{
    console.log(em);
let newPrgf=  data.filter((item)=>{
  return  (em.id===item.id) 
})
setIsOver(newPrgf)
} */

  return (
    <div
      id="image-container"
      className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 "
    >
      {props.cards.map((card) => (
        <div className="col">
          <div
            className="card bg-dark text-white text-start p-3"
            key={card.id} /* onMouseOver={()=>handleOver(cardItem)} */
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

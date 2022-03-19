import React from "react";
import { data } from "../../helper/data";
import "./Card.css"
function Card() {
/* const [isOver,setIsOver]= useState(false)

const handleOver=(em)=>{
    console.log(em);
let newPrgf=  data.filter((item)=>{
  return  (em.id===item.id) 
})
setIsOver(newPrgf)
} */

  return (
    <div>
        <div id="image-container" className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-3">
{data.map((cardItem)=>{
    return(
      <div className="container" key={cardItem.id}>
        <div className="card"  /* onMouseOver={()=>handleOver(cardItem)} */>
        <h2 className="card-title">{cardItem.title}</h2>
        <img
          className="card-img"
          src={cardItem.image}
          alt="nice place"
        />
        <div className="overlay">
         {/* {isOver ?  */}
          <p className="card-img-desc">
            {cardItem.desc}
          </p>
          {/* :null} */}
        </div>
      </div>
      </div>
    )
})}


     
      </div>
    </div>
  );
}

export default Card;

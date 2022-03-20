import React from "react";
import "./Card.css"
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
    

      <div>
        <div className="card bg-dark text-white text-start p-3 m-3"  /* onMouseOver={()=>handleOver(cardItem)} */>
        <h2 className="card-title my-3 ">{props.title}</h2>
        <img
          className="card-img"
          src={props.imgSrc}
          alt="nice place"
        />
        <div className="overlay">
          <p className="card-img-desc">
            {props.desc}
          </p>
        </div>
    
    



     
      </div>
    </div>
  );
}

export default Card;

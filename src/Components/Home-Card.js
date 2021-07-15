import "../Styles/Home-Card.css";
import React from "react";
function HomeCard(props) {
    return (
      <div className="HomeCard">
          <img src={props.image}/>
        <h4 className="name">{props.name}</h4>
      <p className="job-title">{props.job}</p>
    </div>
    );
  }
  
  export default HomeCard;
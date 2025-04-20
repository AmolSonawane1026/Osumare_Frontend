import React from "react";
import "./Section_3.css";
import Uncover_Image from "../../assets/Images/uncover_image.jpg"


import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";



const Section_3 = ({ onOpen }) => {
  return (
    <>
      <div className="section_3_main">
<div className="section_3_sub">
    
<div className="section_3_left">

<LazyLoadImage
   src={Uncover_Image} alt="Uncover Image"
    effect="blur"
  />


</div>

<div className="section_3_right">
    
    <h2>Start Organizing Your <br />
    Life Today</h2>

    <p>Join us now and transform your productivity with our intuitive to-do list platform!</p>

    <div className="section_3_buttons">

        <button className="section_3_btn sign_up" onClick={onOpen}>Sign Up</button>
        <button className="section_3_btn learn_more">Learn More</button>
    </div>


</div>
</div>


      </div>
    </>
  );
};

export default Section_3;

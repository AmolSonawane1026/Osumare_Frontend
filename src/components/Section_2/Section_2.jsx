import React from "react";
import "./Section_2.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Testimonial_Image from "../../assets/Images/testimonial_image.jpg"


const Section_2 = () => {
  return (
    <>
      <div className="section_2_main">
        <div className="section_2_top">
          <h2>Customer Testimonials</h2>
          <p>This tool has transformed my productivity and organization!</p>
        </div>

        <div className="section_2_bottom">
          <div className="left_rectangle">
            <div className="upper_rectangle">


<div className="upper_rectangle_left">

<h2>Using this website has made my <br />
tasks so much easier! I can't <br />
imagine my day without it."</h2>



<div className="name_section">
    <div className="name_section_left"></div>
    <div className="name_section_right">
        <p className="testimonial_name">Sherri Cronin</p>
        <p className="testimonial_role">Project Manager, TechCorp</p>
    </div>
</div>

<div className="next_previous_buttons">

<div className="previous_btn">
<ChevronLeft className="previous" size={26} />

</div>

<div className="next_btn">
<ChevronRight className="right_icon" size={26} />
</div>

</div>

</div>




<div className="upper_rectangle_right">
    
<div className="testimonial_image">
    <img src={Testimonial_Image} alt="Sherri Cronin" />
</div>


</div>



            </div>
          </div>
        </div>



      </div>
    </>
  );
};

export default Section_2;

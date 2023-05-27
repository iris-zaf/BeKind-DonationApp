import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Akis from "../homepage/akis.png";
import Daniel from "../homepage/daniel.png";
import Mary from "../homepage/mary.png";
function Testimonials() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      <div className="myCarousel">
        <img src={Akis} alt="Akis" />
        <div>
          <h3>Akis</h3>
          <h4>Volunteer</h4>
          <p>The experience was amazing</p>
        </div>
      </div>
      <div className="myCarousel">
        <img src={Daniel} alt="Daniel" />
        <div>
          <h3>Daniel</h3>
          <h4>Designer</h4>
          <p>Working for a good cause always feels incredible</p>
        </div>
      </div>
      <div className="myCarousel">
        <img src={Mary} alt="Mary" />
        <div>
          <h3>Mary</h3>
          <h4>Designer</h4>
          <p>The donating process was easy, thanks!</p>
        </div>
      </div>
    </Carousel>
  );
}
export default Testimonials;

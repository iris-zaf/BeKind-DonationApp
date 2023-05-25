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
      <div>
        <img src={Akis} alt="Akis" />
        <div className="myCarousel">
          <h3>Akis</h3>
          <h4>Volunteer</h4>
          <p>The experience was amazing</p>
        </div>
      </div>
      <div>
        <img src={Daniel} alt="Daniel" />
        <div className="myCarousel">
          <h3>Daniel</h3>
          <h4>Designer</h4>
          <p>Working for a good cause always feels amazing!</p>
        </div>
      </div>
      <div>
        <img src={Mary} alt="Mary" />
        <div className="myCarousel">
          <h3>Mary</h3>
          <h4>Designer</h4>
          <p>The donating process was easy, thanks!</p>
        </div>
      </div>
    </Carousel>
  );
}
export default Testimonials;

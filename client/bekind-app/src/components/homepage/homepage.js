import React from "react";
import Carousel from "better-react-carousel";

function Home() {
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img
          width="100%"
          src="https://images.pexels.com/photos/6995179/pexels-photo-6995179.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="image1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          src="https://images.pexels.com/photos/6591154/pexels-photo-6591154.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="image2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          src="https://images.pexels.com/photos/7345406/pexels-photo-7345406.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="image3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          src="https://images.pexels.com/photos/6646847/pexels-photo-6646847.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="image3"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    image: process.env.PUBLIC_URL + "/images/Testing.jpg",
  },
  {
    image: process.env.PUBLIC_URL + "/images/global-network.jpg",
  },
  {
    image: process.env.PUBLIC_URL + "/images/Data_security.jpeg",
  },
  {
    image: process.env.PUBLIC_URL + "/images/dark-office.jpg",
  },
  {
    image: process.env.PUBLIC_URL + "/images/FullStack.jpeg",
  },
  {
    image:process.env.PUBLIC_URL+"/images/DataScience.jpeg",
  }
];

const SliderImage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, 
    autoplay: true,
    autoplaySpeed: 2000, 
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {data.map((slide, i) => (
        <div key={i}>
          <img
            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            src={slide.image}
            alt={`slider image ${i}`}
          />
        </div>
      ))}
    </Slider>
  );
};

export default SliderImage;

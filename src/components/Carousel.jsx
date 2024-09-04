import React from "react";
import Slider from "react-slick";

// Path to images in the public folder
const baseUrl = "/product/"; // Adjust the base URL to reflect the product folder

function CustomPaging() {
  // Slider settings with custom paging
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img  src={`${baseUrl}productThumbnail${i + 1}.png`} alt={`thumbnail ${i + 1}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb", // Custom class for dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div >
          <img style={{height: "600px", width: "auto", objectFit: "cover"}} src={`${baseUrl}productOne.jpg`} alt="slide 1" />
        </div>
        <div>
          <img style={{height: "600px", width: "auto", objectFit: "cover"}}  src={`${baseUrl}productTwo.jpg`} alt="slide 2" />
        </div>
        <div>
          <img style={{height: "600px", width: "auto", objectFit: "cover"}}  src={`${baseUrl}productThree.jpg`} alt="slide 3" />
        </div>
        <div>
          <img style={{height: "600px", width: "auto", objectFit: "cover"}}  src={`${baseUrl}productFour.jpg`} alt="slide 4" />
        </div>
      </Slider>
    </div>
  );
}

export default CustomPaging;

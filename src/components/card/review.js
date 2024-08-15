import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./review.css";
import { useState,useEffect } from "react";
import Testimage from "../../assets/testi.jpg";


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://sheet.best/api/sheets/8ccd1641-ce36-4a5d-969e-547fb4230238");
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial" key={index}>
                <div className="pic">
                  <img src={Testimage} alt="Testimonial Image" />
                </div>
                <p className="description">{testimonial.Message}</p>
                <h3 className="title">{testimonial.Name}</h3>
                <small className="post">- {testimonial.Work}</small>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

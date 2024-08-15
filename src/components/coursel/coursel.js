import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./coursel.css";
import { Link } from "react-router-dom";
const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const textVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === slides.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={slides[currentIndex].image}
            custom={direction}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            variants={slideVariants}
          />
        </AnimatePresence>
      </div>
      <div className="carousel-text">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="text-content"
            custom={direction}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            variants={textVariants}
          >
            <h1>{slides[currentIndex].title}</h1>
  <Link to="/contactus">
  <button className="get-service-button">Get Quotation</button>

  </Link>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* <div className="slide_direction">
        <motion.div className="left" onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path
              d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z"
              fill="white"
            />
          </svg>
        </motion.div>
        <motion.div className="right" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path
              d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z"
              fill="white"
            />
          </svg>
        </motion.div>
      </div> */}
    </div>
  );
};

export default Carousel;

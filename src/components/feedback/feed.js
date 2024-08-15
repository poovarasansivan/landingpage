import React from "react";
import { MdOutlineReviews } from "react-icons/md";
import { useNavigate } from "react-router-dom"; 
import "./feed.css";

const ReviewIcon = () => {
  const Navigate = useNavigate();
  const toggleReview = () => {
    Navigate("/review"); 
  };

  return (
    <div className="review-icon" onClick={toggleReview}>
      <MdOutlineReviews color="white" fontSize={30} />
    </div>
  );
};

export default ReviewIcon;

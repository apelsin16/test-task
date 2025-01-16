import React from 'react';
import starIcon from "../../assets/star.svg";
import css from "./ReviewsLocationInfo.module.css";
import locationIcon from "../../assets/location.svg";

function ReviewsLocationInfo({rating, location, reviewsNumber}) {
    return (
        <div className={css.wrapper}>
            <img src={starIcon} alt="Rating icon" className={css.starImage}/>
            <span>{rating}({reviewsNumber} Reviews)</span>
            <img src={locationIcon} alt="Location icon" className={css.locationImage}/>
            <span>{location}</span>
        </div>
    );
}

export default ReviewsLocationInfo;
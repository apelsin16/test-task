import css from './Reviews.module.css';
import {useSelector} from "react-redux";
import {selectSelectedCamper} from "../../redux/campers/campersSlice.js";
import RatingStars from "../RatingStars/RatingStars.jsx";

function Reviews() {
    const camper = useSelector(selectSelectedCamper);

    if (!camper || !camper.reviews || camper.reviews.length === 0) {
        return <p>There are no comments</p>;
    }

    return (
        <ul className={css.reviews}>
            {camper.reviews.map((review, index) => (
                <li key={index} className={css.item}>
                    <div className={css.reviewInfo}>
                        <div className={css.avatar}>{review.reviewer_name[0]}</div>
                        <div className={css.nameWrapper}>
                            <h5 className={css.name}>{review.reviewer_name}</h5>
                            <RatingStars rating={review.reviewer_rating} />
                        </div>
                    </div>
                    <p className={css.comment}>{review.comment}</p>
                </li>
            ))}
        </ul>
    );
}

export default Reviews;
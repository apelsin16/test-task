import PropTypes from 'prop-types';
import filledStar from '../../assets/star.svg';   // ⭐️ Заповнена зірка
import emptyStar from '../../assets/default_star.svg';     // ☆ Порожня зірка
import css from './RatingStars.module.css';             // Стилі

function RatingStars({ rating }) {
    const totalStars = 5;

    return (
        <div className={css.rating}>
            {[...Array(totalStars)].map((_, index) => (
                <img
                    key={index}
                    src={index < rating ? filledStar : emptyStar}
                    alt={index < rating ? 'Filled star' : 'Empty star'}
                    className={css.star}
                />
            ))}
        </div>
    );
}

RatingStars.propTypes = {
    rating: PropTypes.number.isRequired,  // Рейтинг має бути числом
};

export default RatingStars;
import css from './Camper.module.css';
import heartIcon from '../../assets/heart.svg';
import selectedHeartIcon from '../../assets/selected_heart.svg';
import Button from "../Button/Button.jsx";
import {useNavigate} from "react-router";
import BadgesBox from "../BadgesBox/BadgesBox.jsx";
import Title from "../Title/Title.jsx";
import ReviewsLocationInfo from "../ReviewsLocationInfo/ReviewsLocationInfo.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addToFavorites, removeFromFavorites, selectFavorite} from "../../redux/campers/campersSlice.js";

function Camper({camper}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorite);

    const isFavorite = favorites.some(fav => fav.id === camper.id);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(removeFromFavorites(camper.id));
        } else {
            dispatch(addToFavorites(camper));
        }
    };

    return (
        <div className={css.camper}>
            <img
                src={camper?.gallery[0]?.thumb}
                alt="Camper Image"
                className={css.image}
            />
            <div className={css.info}>
                <div className={css.top}>
                    <Title text={camper.name} />
                    <div className={css.price}>
                        <span>&euro; { Number(camper.price).toFixed(2) }</span>
                        <button className={css.favorite} onClick={handleFavoriteClick}>
                            <img
                                src={isFavorite ? selectedHeartIcon : heartIcon}
                                alt="favorite icon"
                            />
                        </button>
                    </div>
                </div>
                <ReviewsLocationInfo
                    location={camper.location}
                    rating={camper.location}
                    reviewsNumber={camper.reviews.length}
                />
                <p className={css.description}>{camper.description}</p>
                <BadgesBox
                    camper={camper}
                />
                <div className={css.button}>
                    <Button label="Show more" onClick={() => navigate(`/catalog/${camper.id}`)} />
                </div>
            </div>
        </div>
    );
}

export default Camper;
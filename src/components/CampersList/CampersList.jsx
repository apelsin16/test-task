import Camper from "../Camper/Camper.jsx";
import css from "./CamperList.module.css";
import {useState} from "react";
import Button from "../Button/Button.jsx";

function CampersList({campers}) {
    const [visibleCount, setVisibleCount] = useState(4);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 4);
    };

    const visibleCampers = campers.slice(0, visibleCount);

    return (
        <div>
            <ul>
                {visibleCampers.map(camper => {
                    return (
                        <li key={camper.id} className={css.camper}>
                            <Camper camper={camper} />
                        </li>
                    )
                })}
            </ul>
            {visibleCount < campers.length && (
                <div className={css.loadMoreWrapper}>
                    <button
                        onClick={handleLoadMore}
                        className={css.loadMoreButton}
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}

export default CampersList;
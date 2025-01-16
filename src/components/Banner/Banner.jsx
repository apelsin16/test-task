import React from 'react';
import css from './Banner.module.css';
import Button from "../Button/Button.jsx";
import {useNavigate} from "react-router";

function Banner() {
    const navigate = useNavigate();

    const handleGoToCatalog = () => {
        navigate('/catalog');
    }

    return (
        <div className={css.banner}>
            <div className={css.content}>
                <h1 className={css.title}>
                    Campers of your dreams
                </h1>
                <p className={css.text}>
                    You can find everything you want in our catalog
                </p>
                <Button label="View Now" onClick={handleGoToCatalog}/>
            </div>
        </div>
    );
}

export default Banner;
import React, {useEffect, useState} from 'react';
import {NavLink, Outlet, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {selectError, selectLoading, selectSelectedCamper} from "../redux/campers/campersSlice.js";
import {fetchCamperById} from "../redux/camperOps.js";
import heartIcon from "../assets/heart.svg";
import css from "./CamperDetailsPage.module.css";
import starIcon from "../assets/star.svg";
import locationIcon from "../assets/location.svg";
import ImageModal from "../components/ImageModal/ImageModal.jsx";
import Form from "../components/Form/Form.jsx";
import Title from "../components/Title/Title.jsx";
import clsx from "clsx";
import ReviewsLocationInfo from "../components/ReviewsLocationInfo/ReviewsLocationInfo.jsx";

function CamperDetailsPage() {
    const {id} = useParams();

    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [image, setImage] = useState('');

    const dispatch = useDispatch();
    const camper = useSelector(selectSelectedCamper);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchCamperById(id));
    },[dispatch, id]);

    const handleImageClick = (image) => {
        setImage(image);
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setImage('');
        setModalIsOpen(false);
    }

    if(!camper) return;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className={clsx(css.camperDetail, 'container')}>
            <div className={css.titleWrapper}>
                <Title text={camper.name} />
            </div>
            <ReviewsLocationInfo
                location={camper.location}
                rating={camper.location}
                reviewsNumber={camper.reviews.length}
            />
            <div className={css.price}>
                <span>&euro; {Number(camper.price).toFixed(2)}</span>
            </div>
            <ul className={css.gallery}>
                {camper && Array.isArray(camper.gallery) && camper.gallery.length > 0 ? (
                    camper.gallery.map((item, index) => (
                    <li key={index} onClick={() => handleImageClick(item.original)}>
                        <img src={item.thumb} alt="Camper`s photo"/>
                    </li>
                ))) : (
                    <p>Photo not found</p>
                )}
            </ul>
            <p className={css.description}>
                {camper.description}
            </p>
            <nav className={css.nav}>
                <NavLink
                    to="features"
                    className={clsx(css.link, 'nested-link')}
                >
                    Features
                </NavLink>
                <NavLink
                    to="reviews"
                    className={clsx(css.link, 'nested-link')}
                >
                    Reviews
                </NavLink>
            </nav>
            <div className={css.bottom}>
                <Outlet/>
                <Form />
            </div>
            <ImageModal
                image={image}
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
            />
        </div>
    );
}

export default CamperDetailsPage;
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchCampers} from "../redux/camperOps.js";
import css from './CatalogPage.module.css';
import Filters from "../components/Filters/Filters.jsx";
import {selectError, selectCampers, selectLoading} from "../redux/campers/campersSlice.js";
import CampersList from "../components/CampersList/CampersList.jsx";

function CatalogPage(props) {
    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchCampers({}));
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className={clsx(css.catalogPage, "container")}>
            <Filters />
            <CampersList campers={campers} />
        </div>
    );
}

export default CatalogPage;
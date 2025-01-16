import css from './Features.module.css';
import BadgesBox from "../BadgesBox/BadgesBox.jsx";
import {useSelector} from "react-redux";
import {selectSelectedCamper} from "../../redux/campers/campersSlice.js";

function Features() {
    const camper = useSelector(selectSelectedCamper);
    if (!camper) return;
    return (
        <div className={css.features}>
            <BadgesBox camper={camper} />
            <div className={css.details}>
                <h4 className={css.title}>
                    Vehicle details
                </h4>
                <dl>
                    <dd>Form</dd>
                    <dt>{camper.form}</dt>
                </dl>
                <dl>
                    <dd>Length</dd>
                    <dt>{camper.length}</dt>
                </dl>
                <dl>
                    <dd>Width</dd>
                    <dt>{camper.width}</dt>
                </dl>
                <dl>
                    <dd>Height</dd>
                    <dt>{camper.height}</dt>
                </dl>
                <dl>
                    <dd>Tank</dd>
                    <dt>{camper.tank}</dt>
                </dl>
                <dl>
                    <dd>Consumption</dd>
                    <dt>{camper.consumption}</dt>
                </dl>
            </div>

        </div>
    );
}

export default Features;
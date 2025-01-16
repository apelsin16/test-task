import css from './BadgesBox.module.css';
import Badge from "../Badge/Badge.jsx";
import automaticIcon from "../../assets/automatic.svg";
import fuelIcon from "../../assets/fuel.svg";
import kitchenIcon from "../../assets/kitchen.svg";
import acIcon from "../../assets/ac.svg";
import bathroomIcon from "../../assets/bathroom.svg";
import tvIcon from "../../assets/tv.svg";
import radioIcon from "../../assets/radio.svg";
import refrigeratorIcon from "../../assets/refrigerator.svg";
import microwaveIcon from "../../assets/microwave.svg";
import gasIcon from "../../assets/gas.svg";
import waterIcon from "../../assets/water.svg";

function BadgesBox({camper:{
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water
}}) {
    const badgesConfig = [
        { condition: true, icon: automaticIcon, label: transmission },
        { condition: true, icon: fuelIcon, label: engine },
        { condition: kitchen, icon: kitchenIcon, label: "Kitchen" },
        { condition: AC, icon: acIcon, label: "AC" },
        { condition: bathroom, icon: bathroomIcon, label: "Bathroom" },
        { condition: TV, icon: tvIcon, label: "TV" },
        { condition: radio, icon: radioIcon, label: "Radio" },
        { condition: refrigerator, icon: refrigeratorIcon, label: "Refrigerator" },
        { condition: microwave, icon: microwaveIcon, label: "Microwave" },
        { condition: gas, icon: gasIcon, label: "Gas" },
        { condition: water, icon: waterIcon, label: "Water" },
    ];

    return (
        <div className={css.badges}>
            {badgesConfig
                .filter(badge => badge.condition)
                .map((badge, index) => (
                    <Badge
                        key={index}
                        image={badge.icon}
                        label={badge.label}
                    />
                ))}
        </div>
    );
}

export default BadgesBox;
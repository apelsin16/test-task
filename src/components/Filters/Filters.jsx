import {
    changeCamperType,
    changeCheckboxFilter,
    changeLocationFilter,
    resetFilters,
    selectFilters
} from "../../redux/filter/filtersSlice.js";
import {useDispatch, useSelector} from "react-redux";
import css from './Filters.module.css';
import locationIcon from '../../assets/location.svg';
import acIcon from '../../assets/ac.svg';
import automaticIcon from '../../assets/automatic.svg';
import kitchenIcon from '../../assets/kitchen.svg';
import tvIcon from '../../assets/tv.svg';
import bathroomIcon from '../../assets/bathroom.svg';
import vanIcon from '../../assets/van.svg';
import fullyIcon from '../../assets/fully_integrated.svg';
import alcoveIcon from '../../assets/alcove.svg';
import Checkbox from "../Checkbox/Checkbox.jsx";
import RadioButton from "../RadioButton/RadioButton.jsx";
import Button from "../Button/Button.jsx";
import {fetchCampers} from "../../redux/camperOps.js";

function Filters() {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);

    const handleInputChange = (e) => {
        dispatch(changeLocationFilter(e.target.value));
    };

    const handleCheckboxChange = (type) => (isChecked) => {
        dispatch(changeCheckboxFilter({type, value: isChecked}));
    };

    const handleRadioChange = (value) => {
        dispatch(changeCamperType(value));
    };

    const handleSearch = async () => {
        try {
            await dispatch(fetchCampers(filters)).unwrap();
            dispatch(resetFilters());
        } catch (error) {
            console.error('Помилка при завантаженні кемперів:', error);
        }
    };

    return (
        <div className={css.filters}>
            <div>
                <label htmlFor="location" className={css.label}>Location</label>
                <div className={css.inputWrapper}>
                    <input
                        className={css.input}
                        type="text"
                        value={filters.location}
                        onChange={(e) => handleInputChange(e)}
                        name="location"
                        id="location"
                    />
                    <img src={locationIcon} alt="input icon" className={css.inputIcon}/>
                </div>
            </div>
            <h3 className={css.title}>Filters</h3>
            <h4 className={css.filterTitle}>Vehicle equipment</h4>
            <div className={css.filtersBox}>
                <Checkbox
                    image={acIcon}
                    onChange={handleCheckboxChange("ac")}
                    label="AC"
                    name='ac'
                />
                <Checkbox
                    image={automaticIcon}
                    onChange={handleCheckboxChange('automatic')}
                    label="Automatic"
                    name='automatic'
                />
                <Checkbox
                    image={kitchenIcon}
                    onChange={handleCheckboxChange('kitchen')}
                    label="Kitchen"
                    name='kitchen'
                />
                <Checkbox
                    image={tvIcon}
                    onChange={handleCheckboxChange('tv')}
                    label="TV"
                    name='tv'
                />
                <Checkbox
                    image={bathroomIcon}
                    onChange={handleCheckboxChange('bathroom')}
                    label="Bathroom"
                    name='bathroom'
                />
            </div>
            <h4 className={css.filterTitle}>Vehicle type</h4>
            <div className={css.filtersBox}>
                <RadioButton
                    value='van'
                    label='Van'
                    name='camperType'
                    onChange={handleRadioChange}
                    image={vanIcon}
                    selectedValue={filters.camperType}
                />
                <RadioButton
                    value='fullyIntegrated'
                    label='Fully Integrated'
                    name='camperType'
                    onChange={handleRadioChange}
                    image={fullyIcon}
                    selectedValue={filters.camperType}
                />
                <RadioButton
                    value='alcove'
                    label='Alcove'
                    name='camperType'
                    onChange={handleRadioChange}
                    image={alcoveIcon}
                    selectedValue={filters.camperType}
                />
            </div>
            <div className={css.buttonWrapper}>
                <Button label="Search" onClick={handleSearch} />
            </div>
        </div>
    );
}

export default Filters;
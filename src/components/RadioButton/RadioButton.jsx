import css from './RadioButton.module.css';
import clsx from "clsx";

function RadioButton({ label, image, selectedValue, value,onChange }) {
    const isSelected = selectedValue === value;

    const handleSelect = () => {
        if (isSelected) {
            onChange('');
        } else {
            onChange(value);
        }
    };

    return (
        <button
            type="button"
            onClick={handleSelect}
            className={clsx(css.radioButton, {
                [css.selected]: isSelected,
            })}
            aria-pressed={isSelected}
        >
            <img src={image} alt={label} />
            <span>{label}</span>
        </button>
    );
}

export default RadioButton;
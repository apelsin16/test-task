import PropTypes from "prop-types";
import css from './Title.module.css';

function Title({text}) {
    return (
        <div className={css.title}>{ text }</div>
    );
}

Title.propTypes = {
    text: PropTypes.string,
};

export default Title;
import css from './Badge.module.css';

function Badge({image, label}) {
    return (
        <div className={css.badge}>
            <img src={image} alt={label} className={css.image}/>
            <span>{label}</span>
        </div>
    );
}

export default Badge;
import {Link, NavLink} from 'react-router';
import logo from '../../assets/logo.svg';
import css from './Header.module.css';
import clsx from "clsx";

function Header() {
    return (
        <header className={css.Header}>
            <div className={clsx(css.headerWrapper, "container")}>
                <Link to="/" className={css.logo}>
                    <img src={logo} alt="logo" width={136} height={16} />
                </Link>
                <nav>
                    <ul className={css.navList}>
                        <li className={css.firstItem}>
                            <NavLink className={css.navLink} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={css.navLink} to="/catalog">
                                Catalog
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
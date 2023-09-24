import { Link } from "react-router-dom";
import Style from './dashboard.module.css'
import ProfileImage from "../img/Site-logo.png";
import 'bootstrap-icons/font/bootstrap-icons.css';

export function Dashboard() {
    return (
        <>
        <aside className={Style.header}>
            <section className={Style.mainbar}>
                <img src={ProfileImage} alt="User's Profile IMG" />
                <h1>Nickname</h1>
                <div className={Style.configurations}>
                    <Link className={Style.config_links} to="/">
                        <i className="bi bi-person-fill"></i>
                    </Link>
                    <Link className={Style.config_links} to="/">
                        <i className="bi bi-clipboard2-data"></i>
                    </Link>
                    <Link className={Style.config_links} to="/">
                        <i className="bi bi-gear"></i>
                    </Link>
                    <Link className={Style.config_links} to="/">
                        <i className="bi bi-translate"></i>
                    </Link>
                </div>
            </section>

            <nav id={Style.nav} className={Style.nav_menu}>
                <ul className="nav flex-column">
                    <li className={Style.nav_item}>
                        <Link id={Style.active} className={Style.nav_links} aria-current="page" to="#"><i className="bi bi-book" aria-hidden="true"></i> About</Link>
                    </li>
                    <li className={Style.nav_item}>
                        <Link className={Style.nav_links} to="#"><i className="bi bi-plus-square" aria-hidden="true"></i> Create Combo</Link>
                    </li>
                    <li className={Style.nav_item}>
                        <Link className={Style.nav_links} to="#"><i className="bi bi-journals" aria-hidden="true"></i> View Combo</Link>
                    </li>
                    <li className={Style.nav_item}>
                        <Link className={Style.nav_links} to="#"><i className="bi bi-people" aria-hidden="true"></i> Community</Link>
                    </li>
                    <li className={Style.nav_item}>
                        <Link className={Style.nav_links} to="#"><i className="bi bi-card-text" aria-hidden="true"></i> Main Page</Link>
                    </li>
                    <li className={Style.nav_item}>
                        <Link id={Style.logout} className={Style.nav_links} to="#"><i className="bi bi-door-open" aria-hidden="true"></i> Log Out</Link>
                    </li>
                </ul>
            </nav>
        </aside>

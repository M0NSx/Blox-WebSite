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


        <div className={Style.about}>
            <p id={Style.introduction}>Here you can create combos for yourself and share it with peoples
                and also, with a community, you can look for interesting combos and ideas,
                therefore make sure to keep up with new combos!
            </p>

            <div className={Style.combo_creation}>
                <h2 id={Style.title_about}>Creating & Viewing a Combo</h2>
                <p id={Style.preview_about}>
                    Create a combo by clicking on "<span>Create Your Combo</span>" and when creating a combo you can: pick any <span>Fruit</span>, 
                    <span>Fighting Style</span>, <span>Sword</span>, <span>Gun</span> and along with it, it's possible to name the combo and insert a 
                    description about the combo(max 14). After the process of the combo creation, in the "<span>View Combo</span>"
                    you can manage your combo with three options which they are: Delete(to delete your combo), Edit Combo 
                    and View combo. In the Edit Combo option, you can make changes on everything and in the View Combo 
                    option you just see. Also after you create your combo, it is visible in the <span>Community</span> option, 
                    in it you can search for any combo that has been created.
                </p>
            </div>
        </div>

        </>
    )
}

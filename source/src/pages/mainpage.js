import { Link } from "react-router-dom";
import logoImage from "../img/Site-logo.png";
import Style from './mainpage.module.css'
import BFVideo from '../img/BF-Back-VideoFull.mp4'

export function MainPage() {
    return (
        
        <>
        <video autoPlay loop muted playsInline className={Style.back_video}>
            <source src={BFVideo} type="video/mp4" />
        </video>
        <header>
        
            <a type="_blank" href="https://www.roblox.com/games/2753915549/Blox-Fruits">
                <img src={logoImage} className={Style.logo} alt="Blox Fruit Game Link" />
            </a>
            <nav className="nav">

                <ul className={Style.nav_links}>
                    <li><Link className={Style.link} to="/Dashboard">Dashboard</Link></li>
                    <li><Link className={Style.link} to="/Dashboard">Dashboard</Link></li>
                    <li><Link className={Style.link} to="/Dashboard">Dashboard</Link></li>
                    
                </ul>
            </nav>
            <Link to="/LogIn"><button className={Style.login}>Log In</button></Link>
            <Link to="/CreateAccount"><button className={Style.createacc}>Create Account</button></Link>
        </header>
        
        <div className={Style.content}>
            <h1>Blox Fruits Combos</h1>
            <Link className="get-started" to="/LogIn">Get Started</Link>
        </div>
        </>

    )
}

export default MainPage;
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
    

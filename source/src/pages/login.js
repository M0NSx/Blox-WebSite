import Style from './login.module.css'
import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

export function LogIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const LogInUser = () => {
        if(email.length === 0) {
            alert("Email has left Blank!");
        }
        else if(password.length === 0) {
            alert("Password has left Blank!");
        }
        else{
            axios.post('http://127.0.0.1:5000/LogIn', {
                email: email,
                password: password
            })
            .then(function (response) {
                    console.log(response);
                navigate("/dashboard");
            })
            .catch(function (error) {
                console.log(error);
                if (error.response.status === 401) {
                    alert("Invalid Credentials");
                } else {
                    alert("An error occurred while logging in");
                }
            });
        }
    }

    return (
        <>
        <section className={Style.section}>
            <div className={Style.login_box}>
                <form>
                    <h2 id={Style.login_title}>Login</h2>
                    <div className={Style.input_box}>
                        <span className={Style.icon}>
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="nickname" required />
                        <label>Nickname:</label>
                    </div>
                    <div className={Style.input_box}>
                        <span className={Style.icon}>
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input type="Password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" required />
                        <label>Password:</label>
                    </div>
                    <button className={Style.log_button} type="button" onClick={LogInUser}>Login</button>
                    <div className={Style.register_link}>
                        <p className={Style.dont_acc}>Dont have an account? <Link className="to_register" to='/CreateAccount'>Register</Link></p>
                    </div>
                </form>
            </div>
        </section>
        </>
    )
}

export default LogIn;

import { Link, useNavigate } from "react-router-dom";
import Style from './createaccount.module.css'
import React, { useState } from "react";
import axios from 'axios';

export function CreateAccount() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const registerUser = () => {
        axios.post('http://127.0.0.1:5000/CreateAccount', {
                email: email,
                password: password
            })
            .then(function (response) {
                    console.log(response);
                navigate('/LogIn')
            })
            .catch(function (error) {
                console.log(error);
                if (error.response.status === 401) {
                    alert("Invalid Credentials");
                } else {
                    alert("An error occurred while creating the account");
                }
            });
    };

    return (
        <>
        <section className={Style.section}>
            <div className={Style.login_box}>
                <form>
                    <h2 id={Style.create_title}>Create Account</h2>
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
                    <button className={Style.log_button} type="button" onClick={() => registerUser()}>Create</button>
                    <div className={Style.register_link}>
                        <p className={Style.have_acc}>Already have an account? <Link className="to_login" to='/LogIn'>Log In</Link></p>
                    </div>
                </form>
            </div>
        </section>

        </>
    )
}

export default CreateAccount;

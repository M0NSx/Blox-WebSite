import Style from './LogIn.module.css'
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
                console.log(error, 'error');
                if (error.response.status === 401) {
                    alert("Invalid Credentials");
                }
            });
        }
    }

    return (
        <>
        <section className={Style.section}>
            <div className={Style.login_box}>
                <form>
                    <h2>Login</h2>
                    <div className={Style.input_box}>
                        <span className={Style.icon}>
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="nickname" required />
                        <label>Nickname:</label>
                    </div>

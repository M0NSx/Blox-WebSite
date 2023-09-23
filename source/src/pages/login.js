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

import Style from './LogIn.module.css'
import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

export function LogIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

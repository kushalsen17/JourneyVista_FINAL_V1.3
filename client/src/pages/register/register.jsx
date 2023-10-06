import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faEnvelope, faPhone, faEarthAmericas, faCity } from "@fortawesome/free-solid-svg-icons";
import "./register.css";
export const Register = () => {

    const [username, setName] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setConfirmPassword] = useState('');

    const { loading, error } = useContext(AuthContext);

    const navigate = useNavigate();

    async function register() {
        // e.preventDefault();
        if (password == cpassword) {

            const user = {
                username, email, country, city,phone,password
            }
            try {
                const res = await axios.post('/auth/register', user)
                console.log(res);
            } catch (error) {
                console.log(error.response.data)
            }
        } else {
            alert("Password not matched")
        }

    }

    return (
        <>
        <form method="post" id="form">
            <div className="register-container">
                <div className="rHeader-wrapper">
                    <span className="register-header">Register</span>
                </div>
                <div className="register-username ">
                    <span><FontAwesomeIcon icon={faUser} className="icons" /></span>
                    <input type="text" className="form-control rInput" placeholder="Your Full Name"
                        value={username} onChange={(e) => { setName(e.target.value) }} required />
                </div>
                <div className="register-email ">
                    <span><FontAwesomeIcon icon={faEnvelope} className="icons" /></span>
                    <input type="email" className="form-control rInput" placeholder="Your Email"
                        value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                </div>
                <div className="register-password ">
                    <span><FontAwesomeIcon icon={faKey} className="icons" /></span>
                    <input type="password" className="form-control rInput" placeholder="Password"
                        value={password} onChange={(e) => { setPassword(e.target.value) }} required autoComplete="on" />
                </div>
                <div className="register-confirmPassword ">
                    <span><FontAwesomeIcon icon={faKey} className="icons" /></span>
                    <input type="password" className="form-control rInput" placeholder="Confirm Password"
                        value={cpassword} onChange={(e) => { setConfirmPassword(e.target.value) }} required autoComplete="on" />
                </div>
                <div className="register-contact">
                    <span><FontAwesomeIcon icon={faPhone} className="icons" /></span>
                    <input type="tel" className="form-control rInput" placeholder="Your Contact"
                        value={phone} onChange={(e) => { setPhone(e.target.value) }} required />
                </div>
                <div className="register-city ">
                    <span><FontAwesomeIcon icon={faCity} className="icons" /></span>
                    <input type="text" className="form-control rInput" placeholder="Your City"
                        value={city} onChange={(e) => { setCity(e.target.value) }} required />
                </div>
                <div className="register-country ">
                    <span><FontAwesomeIcon icon={faEarthAmericas} className="icons" /></span>
                    <input type="text" className="form-control rInput" placeholder="Your Country"
                        value={country} onChange={(e) => { setCountry(e.target.value) }} required />
                </div>
                <button className="register-submit-btn" onClick={() => {register() && navigate("/login")}}>Register</button> 
                {error && <span className="rErrorMsg">{error.message.data}</span>}
            </div>
        </form>
                <div className="goHome">
                    <button className="goHome-btn" onClick={() => { navigate("/") }}>Go to Home</button>
                </div>
                <div className="loginNav">
                    <button className="loginNav-btn" onClick={() => { navigate("/login") }}>Have an account? Click here!</button>
                </div>
        </>

    )
}
// && navigate("/login") 
export default Register;
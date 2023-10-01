import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="login">
      <div className="leader-wrapper">
        <span className="login-header">Login</span>
      </div>
      <div className="lContainer">
        <div className="lUserContainer">
          <FontAwesomeIcon icon={faUser} className="icons" />
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="lInput"
            size={35}
          />
        </div>
        <div className="lPasswordContainer">
          <FontAwesomeIcon icon={faKey} className="icons" />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
            size={35}
          />
        </div>
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span className="lErrorMsg">
          <FontAwesomeIcon icon={faCircleExclamation} className="icons" />
          {error.message}
        </span>}
        <div className="registerNav">
          <button className="registerNav-btn" onClick={() => { navigate("/register") }}>Don't have an account? Click here!</button>
        </div>
        <div className="goHome">
          <button className="goHome-btn" onClick={() => { navigate("/") }}>Go to Home</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

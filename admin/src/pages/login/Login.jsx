import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { faUser, faKey, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/")
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        })
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  console.log(user);
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
      </div>
    </div>
  );
};

export default Login;
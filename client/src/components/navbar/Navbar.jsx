import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { faCaretDown, faHotel, faUser, faRightFromBracket, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [handleUserProfileClick, sethandleUserProfileClick] = useState(false);
  function logout() {
    localStorage.removeItem('user')
    navigate("/")
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo" title="Your Travel Expert">Journey Vista <FontAwesomeIcon icon={faHotel} /></span>
        </Link>
        <div className="navFeedbackUserContainer">
          <Link to="/feedback" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="feedbackSpan" title="Give Your Feedback">
              <span className="feedbackHeader">Feedback</span>
              <FontAwesomeIcon icon={faComments} />
            </span>
          </Link>
          <span className="dummyLine">|</span>
          {user ? (
            <div
              className="userDropDownWrapper"
              onClick={() => { sethandleUserProfileClick(!handleUserProfileClick) }}
            >
              <div className="userContainer" title="User Name">
                <span className="userIcon"><FontAwesomeIcon icon={faUser} /></span>
                <span className="userNameWrapper">
                  {user.username}
                </span>
                <span>
                  {
                    handleUserProfileClick ?
                      < FontAwesomeIcon icon={faCaretUp} /> :
                      < FontAwesomeIcon icon={faCaretDown} />
                  }
                </span>
              </div>
              {handleUserProfileClick &&
                <a className={{ handleUserProfileClick } ? "logoutWrapper" : "logoutWrapperNone"} href="/" onClick={logout}>
                  Logout
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </a>
              }
            </div>
          ) : (
            <div className="navItems">
              <button className="navButton" onClick={() => { navigate("/register") }}>Register</button>
              <span>Or</span>
              <button className="navButton" onClick={() => { navigate("/login") }} >Login</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

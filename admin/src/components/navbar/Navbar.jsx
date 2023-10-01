import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const {user}=useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon darkModeHover"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <img
              src={user.img}
              alt=""
              className="avatar"
            />
            <span className="userNameWrapper">
                  {user.username}
                </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import "./dashboeard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faUser, faHotel } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <>

            <div className="dashboardWrapper">
                <div className="dashboardItems">
                    <div className="dashboardItem diUsers" onClick={() => { navigate("/users") }}>
                        <FontAwesomeIcon icon={faUser} />
                        <span className="dashboardItemTitle">Users</span>
                    </div>
                    <div className="dashboardItem diHotels" onClick={() => { navigate("/hotels") }}>
                        <FontAwesomeIcon icon={faHotel} />
                        <span className="dashboardItemTitle">Hotels</span>
                    </div>
                    <div className="dashboardItem diRooms" onClick={() => { navigate("/rooms") }}>
                        <FontAwesomeIcon icon={faDoorOpen} />
                        <span className="dashboardItemTitle">Rooms</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
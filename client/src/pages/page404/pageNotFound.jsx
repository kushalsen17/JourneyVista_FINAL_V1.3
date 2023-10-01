import "./pageNotFound.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
export const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <FontAwesomeIcon icon={faTriangleExclamation} />
            Page Not Found: Error Code - 404
        </div>
    );
}

export default PageNotFound;
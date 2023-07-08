import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-title">404</div>
      <h1 className="not-found-text">Page Not Found </h1>
      <Link className="linl" to="/">
        Go To Home Page
      </Link>
    </div>
  );
};

export default NotFound;

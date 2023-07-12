import { Link, useParams } from "react-router-dom";
import "./VerfyEmail.css";
import { FaCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmail } from "../../redux/apicalls/authApiCall";
import { useEffect } from "react";

const VerfyEmail = () => {
  const dispatch = useDispatch();
  const { isEmailVerified } = useSelector((state) => state.auth);

  const { userId, token } = useParams();

  useEffect(() => {
    dispatch(verifyEmail(userId, token));
  }, [userId, token]);

  return (
    <div className="verfy">
      {isEmailVerified ? (
        <>
          <FaCheck
            style={{
              fontSize: "80px",
              color: "green",
            }}
          />
          <h1 className="verfy-title">
            Your Email has been succesflly verified
          </h1>
          <Link to="/login" className="verfy-like">
            Go to Login page
          </Link>
        </>
      ) : (
        <>
          <h1 className="verfy-not-found">Not Found</h1>
        </>
      )}
    </div>
  );
};

export default VerfyEmail;

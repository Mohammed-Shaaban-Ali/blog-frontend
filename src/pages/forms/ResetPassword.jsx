import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Form.css";
import { toast } from "react-toastify";
import {
  getresetPassword,
  resetPassword,
} from "../../redux/apicalls/posswordApiCall";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { isError } = useSelector((state) => state.passwords);
  const { userId, token } = useParams();
  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(getresetPassword(userId, token));
  }, [userId, token]);

  const handelFoem = (e) => {
    e.preventDefault();

    if (password.trim() === "") return toast.error("Please enter a password");
    dispatch(resetPassword(password, { userId, token }));
  };
  return (
    <div className="form-container">
      {isError ? (
        <h1 className="verfy-not-found ">Not Found</h1>
      ) : (
        <>
          <h1 className="form-title">reset Password</h1>
          <form onSubmit={handelFoem} className="form">
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                New Password
              </label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter the password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="form-btn" type="submit">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ResetPassword;

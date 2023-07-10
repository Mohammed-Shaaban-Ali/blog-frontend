import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import "./Form.css";
import { loginUser } from "../../redux/apicalls/authApiCall";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handelFoem = (e) => {
    e.preventDefault();

    if (email.trim() === "") return toast.error("Please enter a email");
    if (password.trim() === "") return toast.error("Please enter a password");
    dispatch(loginUser({ email, password }));
  };
  return (
    <div className="form-container">
      <h1 className="form-title">Login to your Account</h1>
      <form onSubmit={handelFoem} className="form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Enter the email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
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
          Login
        </button>
      </form>
      <div className="form-footer">
        Did yuo forgot the password ?
        <Link to="/forgot-password">Forgot password</Link>
      </div>
    </div>
  );
};

export default Login;

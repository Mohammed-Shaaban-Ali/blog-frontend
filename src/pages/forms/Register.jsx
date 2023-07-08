import { useState } from "react";
import { Link } from "react-router-dom";

import "./Form.css";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelFoem = (e) => {
    e.preventDefault();

    if (username.trim() === "") return toast.error("Please enter a username");
    if (email.trim() === "") return toast.error("Please enter a email");
    if (password.trim() === "") return toast.error("Please enter a password");
    console.log({ username, email, password });
  };
  return (
    <div className="form-container">
      <h1 className="form-title">Create New Account</h1>
      <form onSubmit={handelFoem} className="form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Usrename
          </label>
          <input
            type="text"
            id="username"
            className="form-input"
            placeholder="Enter the username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
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
          Register
        </button>
      </form>
      <div className="form-footer">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;

import { useState } from "react";

import "./Form.css";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const handelFoem = (e) => {
    e.preventDefault();

    if (password.trim() === "") return toast.error("Please enter a password");
    console.log({ password });
  };
  return (
    <div className="form-container">
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
    </div>
  );
};

export default ResetPassword;

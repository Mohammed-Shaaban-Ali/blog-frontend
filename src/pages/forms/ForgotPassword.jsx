import { useState } from "react";
import "./Form.css";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handelFoem = (e) => {
    e.preventDefault();

    if (email.trim() === "") return toast.error("Please enter a email");
    console.log({ email });
  };
  return (
    <div className="form-container">
      <h1 className="form-title">Forgot the password</h1>
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

        <button className="form-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Form.css";
import { toast } from "react-toastify";
import { registerUser } from "../../redux/apicalls/authApiCall";
import swal from "sweetalert";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { registerMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handelFoem = (e) => {
    e.preventDefault();

    if (username.trim() === "") return toast.error("Please enter a username");
    if (email.trim() === "") return toast.error("Please enter a email");
    if (password.trim() === "") return toast.error("Please enter a password");
    dispatch(registerUser({ username, email, password }));
  };

  if (registerMessage) {
    swal({
      title: registerMessage,
      icon: "success",
    }).then((isOk) => {
      if (isOk) {
        navigate("/login");
      }
    });
  }
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

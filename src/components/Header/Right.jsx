import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import { logoutUser } from "../../redux/apicalls/authApiCall";

const Right = () => {
  const { user } = useSelector((state) => state.auth);
  const [dropdown, setDropdown] = useState(false);

  const dispatch = useDispatch();

  const handelLogout = () => {
    setDropdown(false);
    dispatch(logoutUser());
  };

  return (
    <div className="header-right">
      {user ? (
        <>
          <div className="header-right-user-info">
            <div
              className="header-right-username"
              onClick={() => setDropdown(!dropdown)}
            >
              <span className="header-right-username-title">
                {user.username}
              </span>
              {dropdown ? (
                <MdArrowDropUp className="header-right-username-icon" />
              ) : (
                <MdArrowDropDown className="header-right-username-icon" />
              )}
            </div>
            <img
              onClick={() => setDropdown(!dropdown)}
              src={user?.profilePhoto.url}
              alt="user"
              className="header-right-image"
            />
            {dropdown && (
              <div className="header-dropdown">
                <Link
                  to={`/profile/${user?._id}`}
                  className="header-dropdown-item"
                  onClick={() => setDropdown(false)}
                >
                  Profile
                </Link>
                <div
                  className="header-dropdown-item"
                  onClick={() => handelLogout()}
                >
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <Link to="/register" className="header-right-link">
            <span>Register</span>
          </Link>
          <Link to="/login" className="header-right-link">
            <span>Login</span>
          </Link>
        </>
      )}
    </div>
  );
};

export default Right;

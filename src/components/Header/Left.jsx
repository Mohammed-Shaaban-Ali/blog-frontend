import React from "react";
import { BsPencil } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

const Left = ({ toggel, setToggrl }) => {
  return (
    <div className="header-left">
      <div className="header-logo">
        <strong>BLOG</strong>
        <BsPencil />
      </div>
      <div className="header-menu" onClick={() => setToggrl(!toggel)}>
        {toggel ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Left;

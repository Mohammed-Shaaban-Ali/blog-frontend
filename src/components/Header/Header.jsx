import React, { useState } from "react";
import "./Header.css";

import Left from "./Left";
import Right from "./Right";
import Center from "./Center";

function Header() {
  const [toggel, setToggrl] = useState(false);
  return (
    <header className="header">
      <Left toggel={toggel} setToggrl={setToggrl} />
      <Center toggel={toggel} setToggrl={setToggrl} />
      <Right />
    </header>
  );
}

export default Header;

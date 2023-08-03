import React, { useContext } from "react";
import "../styles/burger.css";
import { Link } from "react-router-dom";
import { Context } from "../context/context";

const Header = ({children}) => {
  const contextData = useContext(Context);

  const { state, dispatch } = contextData;

  const handleButtonClick = (buttonId) => {
    dispatch({ type: "ACTIVE_BUTTON", payload: buttonId });
  };

  return (
    <header>
      <div className="head-container p-40">
        <nav className="head-nav">
          <Link
            onClick={() => handleButtonClick(1)}
            to="/"
            className={state.activeButton === 1 ? "active nav-btn" : "nav-btn"}
          >
            HOME
          </Link>

          <Link
            onClick={() => handleButtonClick(2)}
            to="/portfolio"
            className={state.activeButton === 2 ? "active nav-btn" : "nav-btn"}
          >
            PORTFOLIO
          </Link>

          <Link
            onClick={() => handleButtonClick(3)}
            to="/contacts"
            className={state.activeButton === 3 ? "active nav-btn" : "nav-btn"}
          >
            CONTACTS
          </Link>
        </nav>
        {children}
      </div>
    </header>
  );
};

export default Header;

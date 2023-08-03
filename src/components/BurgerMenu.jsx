import React, { useContext } from "react";
import { Context } from "../context/context";
import { Link } from "react-router-dom";
import "../styles/burger.css";

const BurgerMenu = () => {
  const contextData = useContext(Context);

  const { state, dispatch } = contextData;

  const { activeBurgerButton } = state;

  const handleButtonClick = (buttonId) => {
    dispatch({ type: "ACTIVE_BUTTON", payload: buttonId });
  };

  const handleClick = () => {
    dispatch({ type: "ACTIVE_BURGER_BUTTON", payload: !activeBurgerButton });
  };

  return (
    <div className="burger-menu">
      <div id="burger-menu">
        <button onClick={() => handleClick()} className="burger-btn">
          <span
            className={
              activeBurgerButton ? "burger-line burger-line-f" : "burger-line"
            }
          ></span>
          <span
            className={
              activeBurgerButton ? "burger-line burger-line-s" : "burger-line"
            }
          ></span>
          <span
            className={
              activeBurgerButton ? "burger-line burger-line-t" : "burger-line"
            }
          ></span>
        </button>
      </div>
      <div
        onClick={() => handleClick()}
        className={
          activeBurgerButton
            ? "burger-overlay burger-overlay_active"
            : "burger-overlay"
        }
      ></div>
      <div className={activeBurgerButton ? "active-menu menu" : "menu"}>
        <div className="burger-buttons">
          <Link
            onClick={() => {
              handleClick();
              handleButtonClick(1);
            }}
            to="/"
            className={
              state.activeButton === 1
                ? "active-burger_nav_btn burger-nav_btn"
                : "burger-nav_btn"
            }
          >
            HOME
          </Link>

          <Link
            onClick={() => {
              handleClick();
              handleButtonClick(2);
            }}
            to="/portfolio"
            className={
              state.activeButton === 2
                ? "active-burger_nav_btn burger-nav_btn"
                : "burger-nav_btn"
            }
          >
            PORTFOLIO
          </Link>

          <Link
            onClick={() => {
              handleClick();
              handleButtonClick(3);
            }}
            to="/contacts"
            className={
              state.activeButton === 3
                ? "active-burger_nav_btn burger-nav_btn"
                : "burger-nav_btn"
            }
          >
            CONTACTS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;

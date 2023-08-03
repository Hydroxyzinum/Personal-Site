import React, { useEffect, useContext } from "react";
import "../styles/preloader.css";
import { Context } from "../context/context";

const Preloader = () => {
  const contextData = useContext(Context);

  const { state, dispatch } = contextData;

  const { fadeOut, hidePreloader } = state;

  const [...dist] = "Hello.";

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: "FADE_OUT", payload: true });
    }, 2000);

    const hideTimer = setTimeout(() => {
      dispatch({ type: "HIDE_PRELOADER", payload: true });
    }, 2900);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidePreloader) {
    return null;
  }

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <h1 className="preloader-hello">
        {dist.map((item, index) => {
          return (
            <span key={index} className="hello" style={{ animationDelay: index / 4 + "s" }}>
              {item}
            </span>
          );
        })}
      </h1>
    </div>
  );
};

export default Preloader;

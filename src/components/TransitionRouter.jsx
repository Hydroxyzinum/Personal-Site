import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
import routes from "../routes/routes";

const TransitionRouter = () => {
  
  const location = useLocation();

  const transitions = useTransition(location, {
    from: {
      filter: "blur(4px)",
      transform: "translateX(100%) scale(0.2)",
      position: "absolute",
    },
    enter: {
      filter: "blur(0px)",
      transform: "translateX(0%) scale(1)",
      position: "relative",
    },
    leave: {
      filter: "blur(10px)",
      transform: "translateX(100%) scale(0.2)",
      position: "absolute",
    },
  });

  return transitions((style, item, key) => {
    return (
      <animated.main key={key} style={style}>
        <Routes location={item}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </animated.main>
    );
  });
};

export default TransitionRouter;

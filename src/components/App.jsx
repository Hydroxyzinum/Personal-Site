import React, { useReducer } from "react";
import { Context } from "../context/context";
import { initialState, reducer } from "../store/reducer";
import TransitionRouter from "./TransitionRouter";
import Header from "./Header";
import Footer from "./Footer";
import Preloader from "./Preloader";
import BurgerMenu from "./BurgerMenu";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Preloader />
      <Header>
        <BurgerMenu />
      </Header>
      <TransitionRouter />
      <Footer />
    </Context.Provider>
  );
};

export default App;

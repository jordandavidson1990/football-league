import React, { useContext, createContext, useReducer, useState } from "react";
import players from "../../data/Teams.json";
import reducer from "./reducer";

export const Context = createContext();

const defaultState = { players };

export function createProvider() {
  return function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, defaultState);
    return (
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    );
  };
}

export function useStore() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useStore must be used within context provider");
  }
  return context;
}

export function useDispatch() {
  const { dispatch } = useStore();
  return dispatch;
}

export function useSelector(fn) {
  const { state } = useStore();
  return fn(state);
}

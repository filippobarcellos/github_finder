import React, { useReducer } from "react";

import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

export const SHOW_ALERT = "SHOW_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const showAlert = (msg, type) => {
    dispatch({
      type: SHOW_ALERT,
      payload: { msg, type }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        showAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

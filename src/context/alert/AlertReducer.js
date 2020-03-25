import { SHOW_ALERT, REMOVE_ALERT } from "./AlertState";

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_ALERT:
      return payload;
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};

import { Dispatch } from "react";
import { REDUCER_ACTION_TYPE } from "../reducers/actions";

export const formValidations = (
  dispatch: Dispatch<any>,
  usersData: any[],
  email?: string,
  password?: string,
  confirmPassword?: string,
): boolean => {

  const doesEmailExist = usersData.find(dbEmail => dbEmail.email === email);
  console.log(doesEmailExist);

  if (doesEmailExist) {
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_ERROR_EMAIL,
      payload: "Email already exists"
    });
    return true;
  } else {
    dispatch({ type: REDUCER_ACTION_TYPE.UPDATE_ERROR_EMAIL, payload: "" });
  }
 
  if (password) {
    if (password.length < 6) {
      dispatch({
        type: REDUCER_ACTION_TYPE.UPDATE_ERROR_PASSWORD,
        payload: "Password must be at least 6 characters long"
      });
      return true;
    } else if (!/\d/.test(password)) {
      dispatch({
        type: REDUCER_ACTION_TYPE.UPDATE_ERROR_PASSWORD,
        payload: "Password must contain at least one digit"
      });
      return true;
    } else if (!/[A-Z]/.test(password)) {
      dispatch({
        type: REDUCER_ACTION_TYPE.UPDATE_ERROR_PASSWORD,
        payload: "Password must contain at least one capital letter"
      });
      return true;
    } else {
      dispatch({
        type: REDUCER_ACTION_TYPE.UPDATE_ERROR_PASSWORD,
        payload: " "
      });
    }
  }

  if (confirmPassword !== password) {
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_ERROR_CONFIRM_PASSWORD,
      payload: "Password does not match password above"
    });
    return true;
  } else {
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_ERROR_CONFIRM_PASSWORD,
      payload: ""
    });
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_ERROR_PASSWORD,
      payload: " "
    });

    return false;
  }
  

  return false;
};

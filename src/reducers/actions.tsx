export enum REDUCER_ACTION_TYPE {
    TOOGLE,
    TOOGLEDEFAULT,
    FIXNAVBAR,
    NAVBARDEF,
    UPDATE_FIRSTNAME,
    UPDATE_LASTNAME,
    UPDATE_EMAIL,
    UPDATE_PASSWORD,
    UPDATE_CONFRIM_PASSWORD,
    UPDATE_LOGIN_PASSWORD,
    UPDATE_LOGIN_EMAIL,
    UPDATE_JOIN_METHOD,
    UPDATE_ERROR_FIRSTNAME,
    UPDATE_ERROR_LAST_NAME,
    UPDATE_ERROR_EMAIL,
    UPDATE_ERROR_CONFIRM_PASSWORD,
    UPDATE_ERROR_PASSWORD,
    UPDATE_USERS,
    UPDATE_CURRENT_USER
  }
  
  export type ReducerAction = {
    type: REDUCER_ACTION_TYPE;
    payload?: any;
  };
  
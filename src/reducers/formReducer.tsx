import { REDUCER_ACTION_TYPE, ReducerAction } from "./actions";
import { initialState } from "../context/globalContext";

const reducer = (
  state: typeof initialState,
  action: ReducerAction
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.TOOGLE:
      return { ...state, toggle: !state.toggle };
    case REDUCER_ACTION_TYPE.TOOGLEDEFAULT:
      return { ...state, toggle: false };
    case REDUCER_ACTION_TYPE.FIXNAVBAR:
      return { ...state, isNavbarFixed: true };
    case REDUCER_ACTION_TYPE.NAVBARDEF:
      return { ...state, isNavbarFixed: false };
    case REDUCER_ACTION_TYPE.UPDATE_CONFRIM_PASSWORD:
      return { ...state, confirmPassword: action.payload };
    case REDUCER_ACTION_TYPE.UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case REDUCER_ACTION_TYPE.UPDATE_FIRSTNAME:
      return { ...state, firstName: action.payload };
    case REDUCER_ACTION_TYPE.UPDATE_LASTNAME:
      return { ...state, lastName: action.payload };
    case REDUCER_ACTION_TYPE.UPDATE_PASSWORD:
      return { ...state, password: action.payload };
    case REDUCER_ACTION_TYPE.UPDATE_JOIN_METHOD:
      return { ...state, JoinMethod: action.payload };
    case REDUCER_ACTION_TYPE.UPDATE_ERROR_FIRSTNAME:
      return {
        ...state,
        errors: {
          ...state.errors,
          FirstName: action.payload
        }
      };
    case REDUCER_ACTION_TYPE.UPDATE_ERROR_LAST_NAME:
      return {
        ...state,
        errors: {
          ...state.errors,
          LastName: action.payload
        }
      };
    case REDUCER_ACTION_TYPE.UPDATE_ERROR_EMAIL:
      return {
        ...state,
        errors: {
          ...state.errors,
          Email: action.payload
        }
      };
    case REDUCER_ACTION_TYPE.UPDATE_ERROR_CONFIRM_PASSWORD:
      return {
        ...state,
        errors: {
          ...state.errors,
          ConfirmPassword: action.payload
        }
      };
    case REDUCER_ACTION_TYPE.UPDATE_ERROR_PASSWORD:
      return {
        ...state,
        errors: {
          ...state.errors,
          Password: action.payload
        }
      };
      case REDUCER_ACTION_TYPE.UPDATE_ERROR_CONFIRM_EMAIL:
        return{
          ...state,
          errors:{
            ...state.errors,
            confirmEmail: action.payload
          }
        }
    default:
      throw new Error();
  }
};

export default reducer;

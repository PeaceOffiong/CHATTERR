import { createContext, ReactNode, useContext, useReducer } from "react";
import reducer from "../reducers/formReducer";

type AppProviderProps = {
  children: ReactNode;
};

type ContextValue = {
  state: StateType;
  dispatch: React.Dispatch<any>;
};

type StateType = {
  toggle: boolean;
  isNavbarFixed: boolean;
  firstName: string;
  lastName: string;
  email: string;
  confirmPassword: string;
  password: string;
  loginEmail: string;
  loginPassword: string;
  JoinMethod: string;
  isInputEmpty: boolean;
  errors: {
    Email: string;
    Password: string;
    FirstName: string;
    LastName: string;
    ConfirmPassword: string;
    loginEmail: string;
    loginPassword: string;
    confirmEmail: string;
  };
};

export const initialState: StateType = {
  toggle: false,
  isNavbarFixed: false,
  firstName: "",
  lastName: "",
  email: "",
  confirmPassword: "",
  password: "",
  loginEmail: "",
  loginPassword: "",
  JoinMethod: "",
  isInputEmpty: false,
  errors: {
    Email: "",
    Password: "",
    FirstName: "",
    LastName: "",
    ConfirmPassword: "",
    loginEmail: "",
    loginPassword: "",
    confirmEmail: "",
  }
};

const AppContext = createContext<ContextValue>({
  state: initialState,
  dispatch: () => {}
});

const AppProvider = ({ children }: AppProviderProps) => {
  //Reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue: ContextValue = {
    state,
    dispatch
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

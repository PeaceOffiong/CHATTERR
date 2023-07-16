import { useContext, ReactNode, createContext, useState, useReducer } from "react";
import {
  auth,
  provider,
  signInWithPopup,
  signInWithRedirect
} from "../firebase/firebaseConfig";
import { dataReducer } from "@/reducers/dataReducer";

type UserAuthProviderProps = {
  children: ReactNode;
};

type UserAuthContextValue = {
  state: DataStateType;
  dispatch: React.Dispatch<any>;
};

export type DataStateType={
  userData: (number | string | object)[]
}

export const DataState: DataStateType ={
  userData:[]  
}

const UserAuthContext= createContext<UserAuthContextValue>({
  state: DataState,
  dispatch: () => {}
});


const UserAuthProvider = ({ children }:UserAuthProviderProps) => {

  const [state, dispatch] = useReducer(dataReducer, DataState);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(data => console.log(data))
      
};

  const [test, setTest] = useState();

  const contextV: UserAuthContextValue={
    state,
    dispatch
  }

  return (
    <UserAuthContext.Provider value={contextV}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuthContext = () => {
  return useContext(UserAuthContext);
};

export { UserAuthContext, UserAuthProvider };

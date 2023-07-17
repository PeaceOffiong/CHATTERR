import { useContext, ReactNode, createContext, useReducer, useEffect } from "react";
import {
  auth,
  db,
  provider,
  signInWithPopup,
} from "../firebase/firebaseConfig";
import { dataReducer } from "@/reducers/dataReducer";
import { AuthErrorCodes, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs } from "firebase/firestore";
import { REDUCER_ACTION_TYPE } from "@/reducers/actions";

type UserAuthProviderProps = {
  children: ReactNode;
};

type UserAuthContextValue = {
  dataState: DataStateType;
  dispatch: React.Dispatch<any>;
};

export type DataStateType = {
  usersData: (number | string | object)[];
  currentUser: (number | string | object)[];
}

export const DataState: DataStateType = {
  usersData: [],
  currentUser: [],
}

const UserAuthContext = createContext<UserAuthContextValue>({
  dataState: DataState,
  dispatch: () => { },
});


const UserAuthProvider = ({ children }: UserAuthProviderProps) => {

  const [dataState, dispatch] = useReducer(dataReducer, DataState);

  const usersCollectionRef = collection(db, "Users")

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await getDocs(usersCollectionRef)
        const dataArray = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        dispatch({ type: REDUCER_ACTION_TYPE.UPDATE_USERS, payload: dataArray })
        console.log(dataArray)

      } catch (error) {
        console.log(error)
      }
    }
    getUsers();
    console.log(dataState.usersData);
  }, [])



  const contextV: UserAuthContextValue = {
    dataState,
    dispatch,

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

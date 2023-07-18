import { useContext, ReactNode, createContext, useReducer, useEffect } from "react";
import {
  auth,
  db,
  provider,
  signInWithPopup,
} from "../firebase/firebaseConfig";
import { dataReducer } from "@/reducers/dataReducer";
import { AuthErrorCodes, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, getDocs } from "firebase/firestore";
import { REDUCER_ACTION_TYPE } from "@/reducers/actions";
import { NextRouter, useRouter } from "next/router";

type UserAuthProviderProps = {
  children: ReactNode;
};

type UserAuthContextValue = {
  dataState: DataStateType;
  dispatch: React.Dispatch<any>;
  handleGoogleSignUp: () => Promise<void>;
};

export type DataStateType = {
  usersData: any[];
  currentUser: (number | string | object)[];
}

export const DataState: DataStateType = {
  usersData: [],
  currentUser: [],
}

const UserAuthContext = createContext<UserAuthContextValue>({
  dataState: DataState,
  dispatch: () => { },
  handleGoogleSignUp: async () => { }
});


const UserAuthProvider = ({ children }: UserAuthProviderProps) => {
  const router: NextRouter = useRouter();
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

  // useEffect(() => {
  //   onAuthStateChanged(auth, user => {
  //     if (user) {
        
  //     }
  //   })
  // }, [dataState.currentUser])

  const splitFullName = (fullName: string): { firstName: string, lastName: string } => {
    const [firstName, lastName] = fullName.split(' ');
    return { firstName, lastName };
  }

  const handleGoogleSignUp = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        if (user.displayName !== null) {
          const { firstName, lastName } = splitFullName(user.displayName);
          let userDetails = {
            firstName: firstName,
            lastName: lastName,
            fullName: user.displayName,
            interests: [],
            Blogs: {},
            password: "",
            followers: {
              number: []
            },
            email: user.email
          };
          addDoc(usersCollectionRef, userDetails)
          dispatch({ type: REDUCER_ACTION_TYPE.UPDATE_CURRENT_USER, payload: userDetails });
          dispatch({ type: REDUCER_ACTION_TYPE.UPDATE_CURRENT_USER, payload: userDetails });
          router.push(`/${userDetails.firstName}${userDetails.lastName}`);
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };


  const contextV: UserAuthContextValue = {
    dataState,
    dispatch,
    handleGoogleSignUp,
  }

  return (
    <UserAuthContext.Provider value={contextV}>
      {children}
    </UserAuthContext.Provider>
  );

};



;

export const useUserAuthContext = () => {
  return useContext(UserAuthContext);
};

export { UserAuthContext, UserAuthProvider };



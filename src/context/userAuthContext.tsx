import { useContext, ReactNode, createContext, useReducer, useEffect } from "react";
import {
  auth,
  db,
  provider,
  signInWithPopup,
} from "../firebase/firebaseConfig";
import { dataReducer } from "@/reducers/dataReducer";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { REDUCER_ACTION_TYPE } from "@/reducers/actions";
import { NextRouter, useRouter } from "next/router";

type UserAuthProviderProps = {
  children: ReactNode;
};

export type CurrentUserProps = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  fullName: string,
  interests: Array<any>;
  Blogs: object;
  followers: Array<any>
  id?: string;
}

type UserAuthContextValue = {
  dataState: DataStateType;
  dispatchB: React.Dispatch<any>;
  handleGoogleSignUp: () => Promise<void>;
};


export type DataStateType = {
  usersData: any[];
  currentUser: CurrentUserProps[];
  tags: any[];
}

export const DataState: DataStateType = {
  usersData: [],
  currentUser: [],
  tags: []
}

const UserAuthContext = createContext<UserAuthContextValue>({
  dataState: DataState,
  dispatchB: () => { },
  handleGoogleSignUp: async () => { }
});


const UserAuthProvider = ({ children }: UserAuthProviderProps) => {
  const router: NextRouter = useRouter();
  const [dataState, dispatchB] = useReducer(dataReducer, DataState);

  const usersCollectionRef = collection(db, "Users");
  const TabsCollectionRef = collection(db, "Tag")

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await getDocs(usersCollectionRef)
        const dataArray = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        dispatchB({ type: REDUCER_ACTION_TYPE.UPDATE_USERS, payload: dataArray })
      } catch (error) {
        console.log(error)
      }
    }
    getUsers();
    const getTabs = async () => {
      try {
        const data = await getDocs(TabsCollectionRef)
        console.log(data);
        const tabsArray = data.docs.map((doc) => (doc.data()))
        dispatchB({ type: REDUCER_ACTION_TYPE.UPDATE_TABS, payload: tabsArray[0].Tags })
      } catch (error) {
        console.log(error)
      }
    }

    getTabs();
  }, [])

  console.log(dataState.tags);
  console.log(dataState.usersData);

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
          localStorage.setitem("token", userDetails.email)
          dispatchB({
            type: REDUCER_ACTION_TYPE.UPDATE_CURRENT_USER,
            payload: userDetails
          })
          router.push(`/Home`);
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  const contextV: UserAuthContextValue = {
    dataState,
    dispatchB,
    handleGoogleSignUp,
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



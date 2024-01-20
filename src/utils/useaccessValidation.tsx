import { Dispatch } from "react";
import { REDUCER_ACTION_TYPE } from "../reducers/actions";
import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { DocumentKey } from "./constants";

export const accessValidations = (dispatch: Dispatch<any>, dispatchB: Dispatch<any>, loginEmail: string, loginPassword: string) => {
    return new Promise((resolve) => {
        const usersCollectionRef = collection(db, DocumentKey);

        const queryRef = query(usersCollectionRef,
            where("email", "==", loginEmail),
            where("password", "==", loginPassword)
        );

        getDocs(queryRef)
            .then((querySnapshot) => {
                if (!querySnapshot.empty) {
                    querySnapshot.forEach((doc) => {
                        dispatchB({
                          type: REDUCER_ACTION_TYPE.UPDATE_CURRENT_USER, payload: {id: doc.id, ...doc.data() }
                        })
                        dispatch({
                            type: REDUCER_ACTION_TYPE.UPDATE_ERROR_LOGIN_EMAIL,
                            payload: " "
                        });
                    });
                    resolve(true)
                } else {
                    dispatch({
                        type: REDUCER_ACTION_TYPE.UPDATE_ERROR_LOGIN_EMAIL,
                        payload: "Email does not exist on database"
                    });
                    resolve(false)
                    console.log("No user found with the given username and password.");
                }
            })
            .catch((error) => {
                console.error("Error searching for user:", error);
            });

        return true
    })
}
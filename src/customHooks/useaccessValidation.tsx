import { Dispatch } from "react";
import { REDUCER_ACTION_TYPE } from "../reducers/actions";

export const useAccessValidations = (dispatch: Dispatch<any>, dispatchB: Dispatch<any>, loginEmail: string, loginPassword: string, usersData: any[]) => {
    return new Promise((resolve) => {
        const isUserOnDB = usersData.find(person => person.email === loginEmail);
        console.log(isUserOnDB)
        if (!isUserOnDB) {
            dispatch({
                type: REDUCER_ACTION_TYPE.UPDATE_ERROR_LOGIN_EMAIL,
                payload: "Email does not exist on database"
            });
            resolve(false)
        } else {
            dispatch({
                type: REDUCER_ACTION_TYPE.UPDATE_ERROR_LOGIN_EMAIL,
                payload: " "
            });
        }
        if (isUserOnDB.password !== loginPassword) {
            dispatch({
                type: REDUCER_ACTION_TYPE.UPDATE_ERROR_LOGIN_PASSWORD,
                payload: "Password Incorrect"
            });
             resolve(false)
        } else {
            dispatchB({
                type: REDUCER_ACTION_TYPE.UPDATE_CURRENT_USER,
                payload: isUserOnDB
            })
            dispatch({
                type: REDUCER_ACTION_TYPE.UPDATE_ERROR_LOGIN_PASSWORD,
                payload: " "
            });
            resolve(true) 
        }
        return true
    })
    

}
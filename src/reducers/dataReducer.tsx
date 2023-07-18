import { REDUCER_ACTION_TYPE, ReducerAction } from "./actions";
import { DataStateType } from "../context/UserAuthContext";

export const dataReducer = (state: DataStateType,
    action: ReducerAction): DataStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.UPDATE_USERS:
            return { ...state, usersData: action.payload }
        case REDUCER_ACTION_TYPE.UPDATE_CURRENT_USER:
            return {...state, currentUser: [action.payload]}
        default:
            throw new Error();
    }
}


import { REDUCER_ACTION_TYPE, ReducerAction } from "./actions";
import { DataStateType } from "../context/userAuthContext";

export const dataReducer = (state: DataStateType,
    action: ReducerAction): DataStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.UPDATE_CURRENT_USER:
            return { ...state, currentUser: action.payload }
        case REDUCER_ACTION_TYPE.UPDATE_TABS:
            return { ...state, tags: action.payload }
        case REDUCER_ACTION_TYPE.UPDATE_LOADING:
            return { ...state, loading: false }
        default:
            throw new Error();
    }
}


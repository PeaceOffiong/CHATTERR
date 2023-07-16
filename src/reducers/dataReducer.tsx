import { REDUCER_ACTION_TYPE, ReducerAction } from "./actions";
import { DataStateType } from "../context/UserAuthContext";

export const dataReducer = (state: DataStateType,
    action: ReducerAction): DataStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.TOOGLE:
            return { ...state }
        default:
            throw new Error();
    }
}


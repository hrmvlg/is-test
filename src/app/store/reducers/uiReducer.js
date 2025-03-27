import { SET_HEIGHTS, SET_LOADING } from "../actions/uiActions";

const initialState = {
    listHeight: 0,
    loading: true,
};

export function uiReducer(state = initialState, action) {
    switch (action.type) {
        case SET_HEIGHTS: {
            return {
                ...state,
                listHeight: action.payload,
            };
        };
        case SET_LOADING:
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};

export default uiReducer;
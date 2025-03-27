import { SET_HEIGHTS, SET_LOADING, SET_WIDTH } from "../actions/uiActions";

const initialState = {
    listHeight: 0,
    loading: true,
};

export function uiReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_HEIGHTS: {
            return {
                ...state,
                listHeight: payload,
            };
        };
        case SET_WIDTH: {
            return {
                ...state,
                listWidth: payload,
            }
        }
        case SET_LOADING:
            return { ...state, loading: payload };
        default:
            return state;
    }
};

export default uiReducer;
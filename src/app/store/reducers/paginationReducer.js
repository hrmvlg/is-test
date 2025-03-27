import { SET_PAGE, SET_ITEMS_PER_PAGE } from "../actions/paginationActions";

const initialState = {
    page: null,
    itemsPerPage: null,
}

export function paginationReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_PAGE:
            return { ...state, page: payload };
        case SET_ITEMS_PER_PAGE:
            return { ...state, itemsPerPage: payload };
        default:
            return state;
    }
}

export default paginationReducer;
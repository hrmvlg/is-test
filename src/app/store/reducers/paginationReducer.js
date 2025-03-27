import { SET_PAGE, SET_ITEMS_PER_PAGE } from "../actions/paginationActions";

const initialState = {
    page: 1,
    itemsPerPage: 25,
}

export function paginationReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_PAGE:
            return { ...state, page: payload };
        case SET_ITEMS_PER_PAGE:
            return {
                ...state,
                itemsPerPage: Math.ceil((payload / 45) * 2.5)
            };
        default:
            return state;
    }
}

export default paginationReducer;
import {
    SET_USERS,
    ADD_USERS,
    SET_PAGE,
    SET_HEIGHTS,
    SET_LOADING,
    GET_USER,
    CHANGE_INPUT,
    SAVE_USER
} from "./actions";

const initialState = {
    users: [],
    user: {},
    page: 1,
    perPage: 20,
    listHeight: 0,
    itemHeight: 0,
    loading: true,
    inputName: '',
    inputDepartment: '',
    inputCompany: '',
    inputJobTitle: '',
};

export function reducer(state = initialState, action) {
    switch (action.type) {

        case SET_USERS:
            return { ...state, users: action.payload, loading: false };

        case ADD_USERS:
            return {
                ...state,
                users: [...state.users, ...action.payload],
            };

        case SET_PAGE:
            return { ...state, page: action.payload };

        case SET_HEIGHTS:
            return {
                ...state,
                listHeight: action.payload.listHeight,
                itemHeight: action.payload.itemHeight,
            };

        case SET_LOADING:
            return { ...state, loading: action.payload };

        case GET_USER:
            {
                const itemIndex = state.users.findIndex(user => user.id === action.payload);
                return {
                    ...state,
                    user: state.users[itemIndex],
                    inputName: state.users[itemIndex].name,
                    inputDepartment: state.users[itemIndex].department,
                    inputCompany: state.users[itemIndex].company,
                    inputJobTitle: state.users[itemIndex].jobTitle,
                };
            }

        case CHANGE_INPUT:
            return { ...state, [action.nameOfInput]: action.payload };

        case SAVE_USER:
            {
                const itemIndex = state.users.findIndex(user => user.id === state.user.id);
                const updatedUsers = [...state.users];
                updatedUsers[itemIndex] = {
                    ...state.user,
                    name: state.inputName,
                    department: state.inputDepartment,
                    company: state.inputCompany,
                    jobTitle: state.inputJobTitle
                }
                return {
                    ...state,
                    users: updatedUsers
                };
            }

        default:
            return state;
    }
};

export default reducer;
import {
    SET_USERS,
    SET_USERS_COUNT,
    ADD_USERS,
    GET_USER,
    SAVE_USER,
    CHANGE_INPUT,
} from "../actions/userActions";

const initialState = {
    users: [],
    usersCount: null,
    user: {},
    inputName: '',
    inputDepartment: '',
    inputCompany: '',
    inputJobTitle: '',
};

export function usersReducer(state = initialState, { type, payload, nameOfInput }) {
    switch (type) {

        case SET_USERS: return { ...state, users: payload, loading: false };

        case SET_USERS_COUNT: return { ...state, usersCount: payload };

        case ADD_USERS: return { ...state, users: [...state.users, ...payload], };

        case GET_USER:
            {
                const itemIndex = state.users.findIndex(user => user.id === payload);
                return {
                    ...state,
                    user: state.users[itemIndex],
                    inputName: state.users[itemIndex].name,
                    inputDepartment: state.users[itemIndex].department,
                    inputCompany: state.users[itemIndex].company,
                    inputJobTitle: state.users[itemIndex].jobTitle,
                };
            };

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
            };

        case CHANGE_INPUT: {
            return { ...state, [nameOfInput]: payload };
        };

        default:
            return state;
    }
};

export const SET_USERS = 'GET_USERS';
export const SET_USERS_COUNT = 'SET_SET_USERS_COUNT';
export const ADD_USERS = 'ADD_USERS';
export const GET_USER = 'GET_USER';
export const SAVE_USER = 'SAVE_USER';
export const CHANGE_INPUT = 'CHANGE_INPUT';


export const setUsers = (users) => {
    return { type: SET_USERS, payload: users };
};

export const setUsersCount = (usersCount) => {
    return { type: SET_USERS_COUNT, payload: usersCount };
}

export const addUsers = (users) => ({
    type: ADD_USERS,
    payload: users,
});

export const getUser = (id) => {
    return { type: GET_USER, payload: id };
};

export const saveUser = (user) => {
    return { type: SAVE_USER, payload: user };
};

export const changeInput = (nameOfInput, value) => {
    return {
        type: CHANGE_INPUT,
        nameOfInput,
        payload: value
    };
};
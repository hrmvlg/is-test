export const SET_USERS = 'GET_USERS';
export const SET_PAGE = 'SET_PAGE';
export const SET_HEIGHTS = 'SET_HEIGHTS';
export const ADD_USERS = 'ADD_USERS';
export const SET_LOADING = 'SET_LOADING';
export const GET_USER = 'GET_USER';
export const SAVE_USER = 'SAVE_USER';
export const CHANGE_INPUT = 'CHANGE_INPUT';

export const setUsers = (users) => {
    return { type: SET_USERS, payload: users };
};

export const setPage = (page) => {
    return { type: SET_PAGE, payload: page };
};

export const setHeights = (listHeight, itemHeight) => ({
    type: 'SET_HEIGHTS',
    payload: { listHeight, itemHeight },
});

export const addUsers = (users) => ({
    type: 'ADD_USERS',
    payload: users,
});

export const setLoading = (loading) => ({
    type: 'SET_LOADING',
    payload: loading,
});

export const getUser = (id) => {
    return { type: GET_USER, payload: id };
};

export const changeInput = (nameOfInput, value) => {
    return {
        type: 'CHANGE_INPUT',
        nameOfInput,
        payload: value
    };
};

export const saveUser = (user) => {
    return { type: SAVE_USER, payload: user };
};

export const fetchInitialUsers = () => (dispatch, getState) => {
    const itemsPerPage = Math.ceil((450 / 45) * 2.5);
    getState().perPage = itemsPerPage;

    if (!isNaN(itemsPerPage) || itemsPerPage != null) {

        fetch(`http://localhost:3001/users?_page=1&_per_page=${itemsPerPage}`)
            .then((res) => res.json())
            .then((res) => {
                dispatch(setUsers(res.data));
            })
            .catch((error) => console.error('Ошибка:', error));
    }
};

export const fetchMoreUsers = () => (dispatch, getState) => {

    dispatch(setLoading(true));
    const page = getState().page;
    const itemsPerPage = getState().perPage;

    fetch(`http://localhost:3001/users?_page=${page + 1}&_per_page=${itemsPerPage}`)
        .then((res) => res.json())
        .then((res) => {
            const next = res.next;
            if (next === null) {
                return;
            } else {
                dispatch(addUsers(res.data));
                dispatch(setPage(page + 1));
                dispatch(setLoading(false));
            }
        })
        .catch((error) => console.error('Ошибка:', error));
};
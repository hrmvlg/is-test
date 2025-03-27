import { setUsers, setUsersCount, addUsers } from "./userActions";
import { setPage } from "./paginationActions";
import { setLoading } from "./uiActions";

export const fetchInitialUsers = () => async (dispatch, getState) => {

    const state = getState();
    const { page, itemsPerPage } = state.pagination;

    if (!isNaN(itemsPerPage) || itemsPerPage != null) {
        try {
            const response = await fetch(`http://localhost:3001/users?_page=${page}&_per_page=${itemsPerPage}`);
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            dispatch(setUsers(data.data));
            dispatch(setUsersCount(data.data.length));
        } catch (error) {
            console.error(error.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
};

export const fetchMoreUsers = () => async (dispatch, getState) => {

    dispatch(setLoading(true));

    const state = getState();
    const { page, itemsPerPage } = state.pagination;
    const { usersCount } = state.users;

    try {
        const response = await fetch(`http://localhost:3001/users?_page=${page + 1}&_per_page=${itemsPerPage}`);
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if (data.next === null) return;

        dispatch(addUsers(data.data));
        dispatch(setPage(page + 1));
        dispatch(setUsersCount(usersCount + itemsPerPage));
        dispatch(setLoading(false));
    }
    catch (error) {
        console.error(error.message);
    };
};
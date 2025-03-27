export const SET_HEIGHTS = 'SET_HEIGHTS';
export const SET_LOADING = 'SET_LOADING';
export const CHANGE_INPUT = 'CHANGE_INPUT';


export const setHeights = (listHeight) => ({
    type: SET_HEIGHTS,
    payload: listHeight,
});

export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: loading,
});
export const SET_HEIGHTS = 'SET_HEIGHTS';
export const SET_LOADING = 'SET_LOADING';
export const CHANGE_INPUT = 'CHANGE_INPUT';

export const SET_WIDTH = 'SET_WIDTH';

export const setHeights = (listHeight) => ({
    type: SET_HEIGHTS,
    payload: listHeight,
});

export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: loading,
});

export const setWidth = (listWidth) => ({
    type: SET_WIDTH,
    payload: listWidth,
})
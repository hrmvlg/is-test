export const SET_PAGE = 'SET_PAGE';
export const SET_ITEMS_PER_PAGE = 'SET_ITEMS_PER_PAGE';

export const setPage = (page) => {
    return { type: SET_PAGE, payload: page };
};

export const setItemsPerPage = (listHeight) => {
    return { type: SET_ITEMS_PER_PAGE, payload: listHeight };
};
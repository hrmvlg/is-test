import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import { usersReducer } from './reducers/usersReducer';
import { paginationReducer } from './reducers/paginationReducer';
import { uiReducer } from './reducers/uiReducer';


export const rootReducer = combineReducers({
    users: usersReducer,
    pagination: paginationReducer,
    ui: uiReducer,
  });

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
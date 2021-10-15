import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import hotelDestinationList from "./common/hotelDestinationList.reducer";

const rootReducers = combineReducers({
    hotelDestinationList
  });

const store = createStore(
    rootReducers,
    compose(applyMiddleware(thunkMiddleware)),
);

export default store;
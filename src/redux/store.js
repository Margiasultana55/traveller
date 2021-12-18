import { createStore, combineReducers } from "redux";
import bookingReducer from "./reducers/bookingReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    manageBooking: bookingReducer
})

export const store = createStore(rootReducer, composeWithDevTools());
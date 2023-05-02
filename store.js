import { createStore } from 'redux';
import  quoteReducers  from "./reducers/quoteReducer";

const store = createStore(quoteReducers);

export default store;
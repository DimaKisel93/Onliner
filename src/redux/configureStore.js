import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
// import {apiMiddleware} from './apiMiddleware';
import thunk from 'redux-thunk';




export default function configureStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  // return createStore(rootReducer, initialState);
};
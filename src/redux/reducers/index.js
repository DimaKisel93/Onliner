import { combineReducers } from 'redux';
import cars from './carReducers';

const rootReducer = combineReducers({
    cars
});

export default rootReducer;
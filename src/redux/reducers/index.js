import { combineReducers } from 'redux';
import {carsReducers} from './carReducers';

const rootReducer = combineReducers({
    cars:carsReducers
});

export default rootReducer;
import { combineReducers } from 'redux';
import CarsReducers from './car';

const rootReducer = combineReducers({
    cars: CarsReducers
});

export default rootReducer;

import * as constants from './../constants';

const initialState = {
    cars:[],
    url:[],
    filteredItems:[],
    size:""
}

export const carsReducers = (state = initialState, action) => {
    switch (action.type){
        case constants.SET_ALL_CARS:
            return {...state, cars:action.payload, filteredItems: action.payload}
        case constants.SET_ALL_CARS_IMG_URL:
            return {...state, url:action.payload}
        case constants.FILTER_PRODUCTS_BY_SIZE:
            return {...state, filteredItems:action.payload.cars, size:action.payload.size}       
        default: return state
    }
}
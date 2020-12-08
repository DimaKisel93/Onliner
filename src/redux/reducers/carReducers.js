
import * as constants from './../constants';

const initialState = {
    cars:[],
    url:[],
    filteredItems:[],
    brand:"",
    model:"",
    sort:""
}

export const carsReducers = (state = initialState, action) => {
    switch (action.type){
        case constants.SET_ALL_CARS:
            return {...state, cars:action.payload, filteredItems: action.payload}
        case constants.SET_CAR:
            return {...state, cars:action.payload, filteredItems: action.payload}
        case constants.SET_ALL_CARS_IMG_URL:
            return {...state, url:action.payload}
        case constants.FILTER_PRODUCTS_BY_BRAND:
            return {...state, filteredItems:action.payload.cars, brand:action.payload.brand}
        case constants.FILTER_PRODUCTS_BY_MODEL:
            return {...state, filteredItems:action.payload.cars, model:action.payload.model}
        case constants.ORDER_PRODUCTS_BY_SPEED:
            return {...state, filteredItems:action.payload.cars, sort:action.payload.sort}         
        default: return state
    }
}
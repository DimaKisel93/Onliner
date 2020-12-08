import {SHOW_LOADER, HIDE_LOADER, REQUEST_CARS, FILTER_PRODUCTS_SIZE, FILTER_PRODUCTS_MODEL, ORDER_PRODUCTS} from "../constants"

export function fetchCars(){
    return {
        type: REQUEST_CARS
       
    }
}

export function filterProducts(cars, size){
    return {
        type: FILTER_PRODUCTS_SIZE,
        cars:cars,
        size:size
    }
}


export function filterModel(cars, model){
    return {
        type: FILTER_PRODUCTS_MODEL,
        cars:cars,
        model:model
    }
}

export function sortProducts(cars, sort){
    return {
        type: ORDER_PRODUCTS,
        cars:cars,
        sort:sort
    }
}

export function showLoader(){
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader(){
    return {
        type: HIDE_LOADER
    }
}

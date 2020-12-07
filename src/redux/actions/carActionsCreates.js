import {SHOW_LOADER, HIDE_LOADER, REQUEST_CARS, FILTER_PRODUCTS } from "../constants"

export function fetchCars(){
    return {
        type: REQUEST_CARS
       
    }
}

export function filterProducts(cars, size){
    return {
        type: FILTER_PRODUCTS,
        cars:cars,
        size:size
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

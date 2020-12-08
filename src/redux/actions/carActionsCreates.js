import {SHOW_LOADER, HIDE_LOADER, REQUEST_CARS, FILTER_PRODUCTS_BRAND, FILTER_PRODUCTS_MODEL, ORDER_PRODUCTS, REQUEST_CAR} from "../constants"

export function fetchCars(){
    return {
        type: REQUEST_CARS
       
    }
}

export function fetchCar(id){
    return {
        type: REQUEST_CAR,
        id:id
    }
}

export function filterBrand(cars, brand){
    return {
        type: FILTER_PRODUCTS_BRAND,
        cars:cars,
        brand:brand
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

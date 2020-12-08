import {takeEvery, put, call} from 'redux-saga/effects';
import { REQUEST_CARS, SET_ALL_CARS, SET_ALL_CARS_IMG_URL, FILTER_PRODUCTS_BY_BRAND, FILTER_PRODUCTS_BRAND , FILTER_PRODUCTS_MODEL, FILTER_PRODUCTS_BY_MODEL, ORDER_PRODUCTS, ORDER_PRODUCTS_BY_SPEED, REQUEST_CAR, SET_CAR} from './constants';
import {hideLoader, showLoader} from './actions/carActionsCreates';
import { db, storageRef } from '../firebase';

export function* sagaWatcher(){
    try {
        yield takeEvery(REQUEST_CARS, sagaWorker)
        yield takeEvery(REQUEST_CAR, sagaWorkerCar)
        yield takeEvery(FILTER_PRODUCTS_BRAND, sagaWorkerFilterSize)
        yield takeEvery(FILTER_PRODUCTS_MODEL, sagaWorkerFilterModel)
        yield takeEvery(ORDER_PRODUCTS, sagaWorkerSortSpeed)
    } catch (error) {
        console.log(error)
    }
    
}

function* sagaWorker(){   
    // yield put(showLoader())
    const payload = yield call(fetchData)
    yield put({type: SET_ALL_CARS , payload})
  
    const url = yield call(fetchImgUrl)
    console.log(url)
    yield put({type: SET_ALL_CARS_IMG_URL , url})
    // yield put(hideLoader()) 
}

async function fetchImgUrl(){
    debugger;
    try {
        
        const arr = storageRef.listAll().then(res => {
            const ii = res.items.map(itemRef => {
                return itemRef.getDownloadURL().then(url =>{

                    return url
                }
                )
               
            })
            return ii
        }).then(urls =>{
            console.log(urls)
            return urls
        })
        return arr
    } catch (error) {
        error.status = 400;
        console.log("Ошибка")
    }
    
}  


function* sagaWorkerCar(obj){   
    const payload = yield call(fetchCar, obj)
    yield put({type: SET_CAR , payload})
}

function* sagaWorkerFilterSize(cars){
    yield put({type: FILTER_PRODUCTS_BY_BRAND , payload: {
        brand: cars.brand,    
        cars: cars.brand === ""
            ? cars.cars
            : cars.cars.filter(
                (x) => x.brand.toUpperCase().indexOf(cars.brand.toUpperCase()) >= 0
            ),    
       
    }, })
}

function* sagaWorkerFilterModel(cars){
    yield put({type: FILTER_PRODUCTS_BY_MODEL , payload: {
        model: cars.model,    
        cars: cars.model === ""
            ? cars.cars
            : cars.cars.filter(
                (x) => x.model.toUpperCase().indexOf(cars.model.toUpperCase()) >= 0
            ),    
    }, })
}

function* sagaWorkerSortSpeed(cars){
    const products = cars.cars.slice();
    if (cars.sort !== "") {
      products.sort((a, b) =>
        cars.sort === "lowestspeed"
          ? a.speed > b.speed
            ? 1
            : -1
          : a.speed < b.speed
          ? 1
          : -1
      );
    } else {
      products.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
    yield put({
      type: ORDER_PRODUCTS_BY_SPEED,
      payload: {
        sort: cars.sort,
        cars: products,
      },
    });
}

async function fetchData(){
    try {
        const cars = db.collection("Cars")
        .get()
        .then(snapshot => {
            const todos = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            return todos
        })
        return cars
    } catch (error) {
        error.status = 400;
        console.log("Ошибка")
    } 
}

async function fetchCar(obj){
    const id = obj.id
    try {
        const cars = db.collection("Cars").where('id', "==", +id )
        .get()
        .then(snapshot => {
            const todos = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            return todos
        })
        return cars
    } catch (error) {
        error.status = 400;
        console.log("Ошибка")
    } 
}


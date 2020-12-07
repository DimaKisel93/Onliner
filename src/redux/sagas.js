import {takeEvery, put, call} from 'redux-saga/effects';
import { REQUEST_CARS, SET_ALL_CARS, SET_ALL_CARS_IMG_URL, FILTER_PRODUCTS_BY_SIZE, FILTER_PRODUCTS} from './constants';
import {hideLoader, showLoader} from './actions/carActionsCreates';
import { db, storageRef } from '../firebase';

export function* sagaWatcher(){
    try {
        yield takeEvery(REQUEST_CARS, sagaWorker)
        yield takeEvery(FILTER_PRODUCTS, sagaWorkerFilter)
    } catch (error) {
        console.log(error)
    }
    
}

function* sagaWorker(){   
    // yield put(showLoader())
    const payload = yield call(fetchData)
    yield put({type: SET_ALL_CARS , payload})
  
    // const url = yield call(fetchImgUrl)
    // console.log(url)
    // yield put({type: SET_ALL_CARS_IMG_URL , url})
    // yield put(hideLoader()) 
}
function* sagaWorkerFilter(cars){
    // if(cars.size === ""){
    //     return cars.cars
    // }else{
    //     return cars.cars.filter(
    //         x => {
    //             debugger;
    //             return x.brand.toUpperCase().indexOf(cars.size.toUpperCase()) >= 0
    //         }
    //     )
    // }
    yield put({type: FILTER_PRODUCTS_BY_SIZE , payload: {
        size: cars.size,    
        cars: cars.size === ""
            ? cars.cars
            : cars.cars.filter(
                (x) => x.brand.toUpperCase().indexOf(cars.size.toUpperCase()) >= 0
                // x => x.brand.toLowerCase().indexOf(cars.size) > -1
            ),    
       
    }, })
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

async function fetchImgUrl(){
    try {
        const arr = storageRef.listAll().then(res => {
            // const arr = res.items.forEach(function(itemRef) {
            //     let url = itemRef.getDownloadURL();
            //     urlArr.push(url)  
            // });
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
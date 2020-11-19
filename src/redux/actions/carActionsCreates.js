import * as constants from './../constants';


export const fetchCars = () => {  
  debugger;
  return dispatch => {
    dispatch(setCar())
  }
}

function setCar() {
  return {
    type: "SET_ALL_CAR"
  };
}

export const createCar = (data) => {  
      debugger;
      return {
        type: "ADD_CAR",
        payload: data
      };
  
}

function addCar(data) {
  return {
    type: "ADD_CAR",
    payload: data
  };
}

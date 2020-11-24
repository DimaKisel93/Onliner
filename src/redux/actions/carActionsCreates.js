import * as constants from './../constants';


export const removeCars = (id) => {  
  return {
    type: "REMOVE_CAR",
    payload:id
  };
}

export const createCar = (data) => {  
      return {
        type: "ADD_CAR",
        payload: data
      };
  
}


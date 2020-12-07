import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createCar } from '../redux/actions/carActionsCreates';
import { useSelector } from 'react-redux';

const Car = () => {

  const cars = useSelector(state => state.cars.cars);
  console.log(cars)

  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <h2>Car Description</h2>
        </div>
      </div>     
    </React.Fragment>
  )
}


  export default Car;
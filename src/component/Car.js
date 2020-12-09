import React, { useEffect } from 'react';
import { fetchCar } from '../redux/actions/carActionsCreates';
import { useSelector, useDispatch } from 'react-redux';

const Car = ({match}) => {

  const cars = useSelector(state => state.cars.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCar(match.params.carId))
  }, [dispatch, match])
  
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <h2>Car Description</h2>
        </div>
      </div>
        {cars &&  
        <ul>
          <img src={cars[0].img} alt="lexus" with="200" height="100"></img>
          <li>{cars[0].brand}</li>
          <li>{cars[0].model}</li>
          <li>{cars[0].speed}</li>
          <li>{cars[0].weight}</li>
          <li>{cars[0].description}</li>
        </ul> 
        }  
    </React.Fragment>
  )
}

export default Car;
import React, {useEffect, useState} from 'react';
import  AppDrawer  from './AppDrawer/index';
import  AppContent  from './AppContent/index';
import { Link } from 'react-router-dom';
import collection_image from '../img/Lexus.jpg'
import { fetchCars, filterProducts} from "../redux/actions/carActionsCreates";
import { useSelector,useDispatch } from 'react-redux';


function Cars(){
    const filteredProducts = useSelector(state => state.cars.filteredItems);
    const dispatch = useDispatch();
    // console.log(filteredProducts[0].img)

    useEffect(() => {
      dispatch(fetchCars())
    }, [dispatch])

    return ( 
        <div className="main__container">
            <AppDrawer />
            <AppContent>
                {filteredProducts && filteredProducts.map(car =>
                    <Link className="link" to={`/car/${car.id}`} key={car.id}> 
                        <ul className="car__list">
                            <img src={collection_image} alt="lexus" with="200" height="100"></img>
                            <li>{car.brand}</li>
                            <li>{car.model}</li>
                            <li>{car.speed}</li>
                            <li>{car.weight}</li>
                            <li>{car.description}</li>
                        </ul>
                    </Link> 
                )}
            </AppContent>
        </div>
    )
}

export default Cars;
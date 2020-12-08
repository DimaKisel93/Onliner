import React, {useEffect, useState} from 'react';
import  AppDrawer  from './AppDrawer/index';
import  AppContent  from './AppContent/index';
import { Link } from 'react-router-dom';
import collection_image from '../img/Lexus.jpg'
import { fetchCars, filterProducts, filterModel, sortProducts } from "../redux/actions/carActionsCreates";
import { useSelector,useDispatch } from 'react-redux';


function Cars(){
    const cars = useSelector(state => state.cars.cars);
    const size = useSelector(state => state.cars.size);
    const model = useSelector(state => state.cars.model);
    const sort = useSelector(state => state.cars.sort);
    const filteredProducts = useSelector(state => state.cars.filteredItems);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchCars())
    }, [dispatch])

  
    return ( 
        <div className="main__container">
            <AppDrawer />
            <AppContent>
              <div className="col-md-4">
                <label>
                  Order by
                  <select
                    className="form-control"
                    value={sort}
                    onChange={(event) => {
                      dispatch(sortProducts(
                        filteredProducts,
                        event.target.value
                      ));
                    }}
                  >
                    <option value="">Select</option>
                    <option value="lowestspeed">Lowest to highest</option>
                    <option value="highestspeed">Highest to lowest</option>
                  </select>
                </label>
              </div>
              <div className="col-md-4">
                <label>
                  {" "}
                  Filter Brand
                  <select
                    className="form-control"
                    value={size}
                    onChange={(event) => {
                      dispatch(filterProducts(
                        cars,
                        event.target.value
                      ));
                    }}
                  >
                    <option value="">ALL</option>
                    <option value="BMW">BMW</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Mersedes">Mersedes</option>
                    <option value="Tesla">Tesla</option>
                    <option value="Lexus">Lexus</option>
                  </select>
                </label>
              </div>
              <div className="col-md-4">
                <label>
                  {" "}
                  Filter Model
                  <select
                    className="form-control"
                    value={model}
                    onChange={(event) => {
                      dispatch(filterModel(
                        cars,
                        event.target.value
                      ));
                    }}
                  >
                    <option value="">ALL</option>
                    <option value="M4">M4</option>
                    <option value="Polo">Polo</option>
                    <option value="S-coupe">S-coupe</option>
                    <option value="S">S</option>
                    <option value="LFA">LFA</option>
                  </select>
                </label>
              </div>
                {filteredProducts && filteredProducts.map(car =>
                    <Link className="link" to='/car' key={car.id}> 
                        <ul>
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
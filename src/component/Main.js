import React, {useEffect, useState} from 'react';
import  AppDrawer  from './AppDrawer/index';
import  AppContent  from './AppContent/index';
import { Link } from 'react-router-dom';
import collection_image from '../img/Lexus.jpg'
import { fetchCars, filterProducts } from "../redux/actions/carActionsCreates";
import { useSelector,useDispatch } from 'react-redux';


function Cars(){
    const cars = useSelector(state => state.cars.cars);
    const size = useSelector(state => state.cars.size);
    const filteredProducts = useSelector(state => state.cars.filteredItems);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchCars())
    }, [dispatch])

  
    return ( 
        <div className="main__container">
            <AppDrawer />
            <AppContent>
            {/* <div className="col-md-4">
          <label>
            Order by
            <select
              className="form-control"
            //   value={this.props.sort}
            //   onChange={(event) => {
            //     this.props.sortProducts(
            //       this.props.filteredProducts,
            //       event.target.value
            //     );
            //   }}
            >
              <option value="">Select</option>
              <option value="lowestprice">Lowest to highest</option>
              <option value="highestprice">Highest to lowest</option>
            </select>
          </label>
        </div> */}
        <div className="col-md-4">
          <label>
            {" "}
            Filter Size
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
              <option value="Mersedecs">Mersedecs</option>
              <option value="Tesla">Tesla</option>
              <option value="Lexus">Lexus</option>
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
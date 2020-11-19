import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { fetchCars } from './../redux/actions/carActionsCreates'
function Table({cars, dispatchFetchAllCarAction}){
    
    // useEffect(() => dispatchFetchAllCarAction(), [dispatchFetchAllCarAction]);
    console.log(cars)
    const removeData = (id) => {

    }
    const renderBody = () => {
        console.log(cars)
        return cars && cars.map(({ id, car, model, speed, weight, description }) => {
            return (
                <tr key={id}>
                    <td>{car}</td>
                    <td>{model}</td>
                    <td>{speed}</td>
                    <td>{weight}</td>
                    <td>{description}</td>
                    <td className='opration'>
                        <button className='button' onClick={() => removeData(id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }
    return(
        <> 
            <div className="col-2">
                
            </div>
            <h1 id='title'>Cars Table</h1>
            <Link to="/new" className="btn btn-danger">
                <Button variant="danger">add Car</Button>
            </Link> 
            <table id='cars'>
                <thead>
                    <tr className="thead-dark col-12">
                        <th scope="col">Car</th>
                        <th scope="col">Model</th>
                        <th scope="col">Speed</th> 
                        <th scope="col">Weight</th>        
                        <th scope="col">Description</th>        
                        <th scope="col"></th>        
                        <th scope="col"></th>        
                    </tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )

    
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    dispatchFetchAllCarAction: () => dispatch(fetchCars()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table)
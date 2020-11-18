import React from 'react';
import {connect} from 'react-redux';

function Table({cars}){
    console.log(cars)

    const removeData = (id) => {

    }
    const renderBody = () => {
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
            <h1 id='title'>Cars Table</h1>
            <table id='cars'>
                <thead>
                    <tr className="thead-dark col-12">
                        <th scope="col">Car</th>
                        <th scope="col">Model</th>
                        <th scope="col">Speed</th> 
                        <th scope="col">Weight</th>        
                        <th scope="col">Description</th>        
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

const mapStateToProps = state => ({
    cars: state.cars
});

export default connect(mapStateToProps)(Table)
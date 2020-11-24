import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { removeCars } from './../redux/actions/carActionsCreates'
import useSortableData from './useSortableData'

function Table({cars, dispatchRemoveCar}){
    
    const {items, requestSort, sortConfig} = useSortableData(cars);

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
          return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
      };

    const removeData = (id) => {
        dispatchRemoveCar(id)
    }

    const renderBody = () => {
        return items && items.map(({ id, car, model, speed, weight, description }) => {
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
                        <th scope="col">
                            <button type="button" onClick={() => requestSort("car")} className={getClassNamesFor('car')}>car</button>
                        </th>
                        <th scope="col">
                            <button type="button" onClick={() => requestSort("model")} className={getClassNamesFor('model')}>model</button>
                        </th>
                        <th scope="col">
                            <button type="button" onClick={() => requestSort("speed")} className={getClassNamesFor('speed')}>speed</button>
                        </th>
                        <th scope="col">
                            <button type="button" onClick={() => requestSort("weight")} className={getClassNamesFor('weight')}>weight</button>
                        </th>
                        <th scope="col">
                            <button type="button" onClick={() => requestSort("description")} className={getClassNamesFor('description')}>description</button>
                        </th>       
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
    dispatchRemoveCar: (id) => dispatch(removeCars(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table)
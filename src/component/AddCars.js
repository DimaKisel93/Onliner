import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { createCollection, getCollectionById, updateCollectionById } from './../redux/actions/collectionsActionCreators';


const AddCars = ({ }) => {
  const [car, setCar] = useState('');
  const [model, setModel] = useState('');
  const [speed, setSpeed] = useState('');
  const [weight, setWeight] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState({ name: false, description: false, topic: false, visible_field1: false, visible_field2: false, visible_field3: false, visible_field4: false, visible_field5: false, visible_field6: false, visible_field7: false, visible_field8: false, visible_field9: false, visible_field10: false, visible_field11: false, visible_field12: false });

 
  const handleOnSubmit = event => {
    event.preventDefault();
    // if (isFormInvalid()) updateErrorFlags();
    // else {
    //   const { collectionId } = match.params;
    //   const data = { name, description, topic, visible_field1, visible_field2, visible_field3, visible_field4, visible_field5,visible_field6, visible_field7, visible_field8, visible_field9, visible_field10, visible_field11, visible_field12 };
    //   if (collectionId) {
    //     dispatchUpdateCollectionAction(collectionId, data)
    //       toast.success('Collection updated Successfully!');
    //       history.replace('/public/collections');
    //   } else {
    //     dispatchCreateCollectionAction(data)
    //     toast.success('Collection created Successfully!');
    //     history.replace('/public/collections');
    //   }
    // }
  }


  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <h2>Add Car</h2>
        </div>
      </div>
      <div className="row align-items-center mt-4">
        <div className="col-9">
          <form noValidate onSubmit={handleOnSubmit} >
            <div className="form-group">
              <label htmlFor="car">Car</label>
              <input noValidate id="car"
                type="text"
                placeholder="car"
                name="car"
                value={car}
                onChange={(e) => setCar(e.target.value)}
                className={`form-control ${error.car ? 'is-invalid' : ''}`} />
            </div>
            <div className="form-group">
              <label htmlFor="model">model</label>
              <input noValidate id="model"
                type="text"
                placeholder="model"
                name="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className={`form-control ${error.model ? 'is-invalid' : ''}`} />
            </div>
            <div className="form-group">
              <label htmlFor="speed">speed</label>
              <input noValidate id="speed"
                type="text"
                placeholder="speed"
                name="speed"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                className={`form-control ${error.speed ? 'is-invalid' : ''}`} />
            </div>
            <div className="form-group">
              <label htmlFor="weight">weight</label>
              <input noValidate id="weight"
                type="text"
                placeholder="weight"
                name="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className={`form-control ${error.weight ? 'is-invalid' : ''}`} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input noValidate id="description"
                type="text"
                placeholder="Description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`form-control ${error.description ? 'is-invalid' : ''}`} />
            </div>
            <div className="mt-5">
              <button type="submit" className="btn btn-danger mr-2 btn-lg">
                add Car | <i className="fas fa-save"></i>
              </button>
              <button type="button"
                className="btn btn-secondary btn-lg">
                Cancel | <i className="fas fa-times"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}


export default  AddCars;
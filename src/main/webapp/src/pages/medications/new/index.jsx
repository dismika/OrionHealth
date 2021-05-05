import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

import { CreateNewMedication } from 'services/medication';

const AddNewMedication = ()=> {

  const { user_id } = useParams();

  const [medication, setMedication] = useState({
    user: {
      id: user_id,
    },
    description: '',
  });


  const [formAlert, setFormAlert] = useState('')

  const handleChange = event => {
    const { name, value } = event.target;
    setMedication({ 
      ...medication,
      description: value 
    });
  };

  const handleSubmit = event => {

    event.preventDefault();

    const response = CreateNewMedication(medication)

    if (response) {
      setFormAlert("A Medication has been added")
    }

  }

  useEffect(() => {
    
    setMedication({
      ...medication,
      user: {
        id: user_id
      }
    })

  }, [])

  return (
    <React.Fragment>

      <div className="container">
        <div style={{ marginTop: '30px'}}>
          <h2>Add New Medication</h2>

          {formAlert &&
            <p>{formAlert}</p>
          }

          <div className="row">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>

                <div className="form-group">
                  <label>Description</label>
                  <textarea className="form-control"
                          required="required"
                          name="description"
                          onChange={handleChange} ></textarea>
                </div>

                <div className="form-group">
                  { medication.user.id &&
                    <Link to={`/medication/view/${medication.user.id}`} className="btn btn-default">Back</Link>
                  }
                 
                  <input type="submit" 
                          className="btn btn-primary" value="Save & Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ); 

  
}

export default AddNewMedication;
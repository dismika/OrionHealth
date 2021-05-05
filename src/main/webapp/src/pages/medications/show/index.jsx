import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

import { getMedicationDetails } from 'services/medication';

import MedicationListItem from './components/MedicationListItem';

const ShowMedication = () => {

	const [medicationDetails, setMedicationDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user_id } = useParams();
	
	const fetchMedicationDetails = () => {
		
		getMedicationDetails(user_id)
      .then((result) => {
        setMedicationDetails(result)
        setIsLoading(false)
      });

	}
	
	useEffect(() => {
		
		fetchMedicationDetails();

 	}, [])

  if (isLoading) {
    return <em>Loading...</em>

  } else {
    return (
      <React.Fragment>

        <div className="container">
          <div style={{ marginTop: '30px'}}>

            <div className="d-flex justify-content-between">
              <h2>View Medication</h2>

              <div>
                <Link to={`/medication/add/${user_id}`} className='btn btn-primary'>Add New Medication</Link>
              </div>
            </div>

            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Created At</th>
                </tr>
              </thead>

              <tbody>
              	{medicationDetails.map( (medication, index) => {
                  return <MedicationListItem key={index} medication={medication} />
                }) }
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    ); 
  }

  
}

export default ShowMedication;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import { getUsersList } from 'services/user';

import UsersListItem from './UsersListItem';

const UsersListTable = () => {

	const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
	const fetchUsers = () => {
		
		getUsersList()
      .then((result) => {
        setUsers(result)
        setIsLoading(false)
      });

	}
	
	useEffect(() => {
		fetchUsers();
 	}, [])

  if (isLoading) {
    return <em>Loading...</em>

  } else {
    return (
      <React.Fragment>

        <div className="container">
          <div style={{ marginTop: '30px'}}>

            <div className="d-flex justify-content-between">
              <h2>All Patients</h2>

              <div>
                <Link to="/users/add" className='btn btn-primary'>Add New Patient</Link>
              </div>
            </div>

            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map( (user, index) => {
                  return <UsersListItem key={index} user={user} />
                }) }
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    ); 
  }
  
}

export default UsersListTable;
import React from 'react';
import { Link } from 'react-router-dom'

const UsersListItem = ({
	user
}) => {

	return (
		<>
			<tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>
        	<Link to={`medication/view/${user.id}`} className="btn btn-primary">View Medications</Link>
        </td>
      </tr>
		</>
	)

  
}

export default UsersListItem;
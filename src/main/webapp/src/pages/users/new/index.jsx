import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { CreateNewUser } from 'services/user';

const AddNewUser = ()=> {

	const [user, setUser] = useState({
		name: '',
		username: '',
		email: '',
		phone: ''
	});

	const [formAlert, setFormAlert] = useState('')

	const handleChange = event => {
	  const { name, value } = event.target;
	  setUser({ 
	  	...user,
	  	[name]: value 
	  });
	};

	const handleSubmit = event => {

		event.preventDefault();

		const response = CreateNewUser(user)

		if (response) {
			setFormAlert("A Patient has been added")
		}

	}

	return (
    <React.Fragment>

      <div className="container">
        <div style={{ marginTop: '30px'}}>
        	<h2>Add New Patient</h2>

        	{formAlert &&
        		<p>{formAlert}</p>
        	}
          <div className="row">
          	<div className="col-md-6">
          		<form onSubmit={handleSubmit}>

		          	<div className="form-group">
		          		<label>Name</label>
		          		<input type="text" 
		          						className="form-control"
		          						name="name"
		          						onChange={handleChange}
		          						required="required" />
		          	</div>

		          	<div className="form-group">
		          		<label>Email</label>
		          		<input type="text" 
		          						className="form-control"
		          						name="email"
		          						onChange={handleChange} />
		          	</div>

		          	<div className="form-group">
		          		<label>Phone</label>
		          		<input type="text" 
		          						className="form-control"
		          						name="phone"
		          						onChange={handleChange} />
		          	</div>

		          	<div className="form-group">
		          		<label>Username</label>
		          		<input type="text" 
		          						className="form-control"
		          						name="username"
		          						onChange={handleChange} />
		          	</div>

		          	<div className="form-group">
		          		<Link to='/users' className="btn btn-default">Back</Link>
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

export default AddNewUser;
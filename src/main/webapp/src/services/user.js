import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export const getUsersList = async () => {

  try {
    const response = await axios.get(`${API_BASE_URL}/users/list`)
    return response.data

  } catch(error) {
    console.log("error", error);
    
    return []
  }
	
}

export const CreateNewUser = async formData => {
  
  try {
    const response = await axios.post(`${API_BASE_URL}/users/add`, formData)
    return response.data

  } catch(error) {
    console.log("error", error);
    
    return []
  }

}

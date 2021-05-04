import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export const getMedicationDetails = async user_id => {

  try {
    const response = await axios.get(`${API_BASE_URL}/medication/view/${user_id}`)
    return response.data

  } catch(error) {
    console.log("error", error);
    
    return []
  }
	
}

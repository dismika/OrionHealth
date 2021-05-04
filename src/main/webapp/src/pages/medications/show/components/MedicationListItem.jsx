import React from 'react';

const MedicationListItem = ({
	medication
}) => {

	return (
		<>
			<tr>
        <td>{medication.description}</td>
        <td>{medication.createdAt}</td>
      </tr>
		</>
	)

  
}

export default MedicationListItem;
import React from 'react';
import Assignment from './Assignment';
import axios from 'axios';
import { getSavedData, saveData, getAssignments } from './Api';
import { useContext } from 'react';
import AlertContext from './AlertContext';



function AssignmentList(props) {
 
	const savedAssignments = getSavedData('assignments') || [];
	const [assignmentData, setData] = React.useState(savedAssignments);
  const { showAlert } = useContext(AlertContext);

	React.useEffect(() => {
		const promise = getAssignments({showAlert});
		promise.then(response => {
			setData(response);
			saveData('assignments', response);
      console.log(response)
		})
    showAlert("Assignments Loaded")
	}, []);
	

	return (
   
		<div className="m-10 bg-gray-100 p-4 h-fit w-full rounded-md">
       
			<h1 className="text-2xl pl-3 pt-2 font-black ">Assignment List</h1>
			{assignmentData.map(d => (
      
				<Assignment
					key={d.id}
					detailId={d.id}
					count={d.id}
					href={d.submissions[0].submission_link}
					about={d.title}
					date={d.created_at}
					dueDate={d.due_date}
				/>
			))}
		</div>
	);
}

export default AssignmentList;

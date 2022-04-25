import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AssignmentDetail from './AssignmentDetail';
import { saveData, getSavedData, details } from './Api';

function AssignmentDetailList() {
	const savedAssignments = getSavedData('details') || [];
	const [detailsData, setData] = React.useState(savedAssignments);
	const [href, setHref] = React.useState('');
	const stringParams = useParams();
	const numberParams = +stringParams.id;

	React.useEffect(() => {
		details(numberParams).then(response => {
			saveData('details', response.data);
			setData(response.data);
			setHref(response.data.submissions[0].submission_link);
			console.log(response.data);
		});
	}, []);

	return (
		<>
			<div className=" m-10 bg-gray-100 p-4 h-fit w-full rounded-md">
				<AssignmentDetail
					detailId={numberParams}
					key={detailsData.id}
					datePassed={true}
					dueDate={detailsData.due_date}
					href={href}
					title={detailsData.title}
					discription={detailsData.description}
				/>
			</div>
		</>
	);
}

export default AssignmentDetailList;

import React from 'react';
import Lecture from './Lecture';
import axios from 'axios';
import { DateTime } from 'luxon';
import { getSavedData,getLectures } from './Api';

function LecturesList() {
	const savedAssignments = getSavedData('lectures') || [];
	const [lectureData, setData] = React.useState(savedAssignments);

	React.useEffect(() => {
		const users = getLectures();
		users.then(response => {
      console.log(response)
			setData(response);
		});
	}, []);

	return (
		<div className="m-10 bg-gray-100 p-4 h-fit w-full rounded-md">
			<h1 className="text-2xl font-black ">Lecture List </h1>
			{lectureData.map(d => <Lecture key={d.id} {...d} />)}
		</div>
	);
}

export default LecturesList;

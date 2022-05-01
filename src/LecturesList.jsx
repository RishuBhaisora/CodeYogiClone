import React from 'react';
import Lecture from './Lecture';
import axios from 'axios';
import { DateTime } from 'luxon';
import { getSavedData,getLectures } from './Api';
import { useContext } from 'react';
import AlertContext from './AlertContext';


function LecturesList() {
	const savedAssignments = getSavedData('lecture') || [];
	const [lectureData, setData] = React.useState(savedAssignments);
  const { showAlert } = useContext(AlertContext);
  
	React.useEffect(() => {
		const users = getLectures({showAlert});
		users.then(response => {
		setData(response);
		});
    console.log("hii")
     showAlert("Lectures Loaded")
	}, []);

	return (
		<div className="m-10 bg-gray-100 p-4 h-fit w-full rounded-md">
			<h1 className="text-2xl font-black ">Lecture List </h1>
			{lectureData.map(d => <Lecture key={d.id} {...d} />)}
		</div>
	);
}

export default LecturesList;

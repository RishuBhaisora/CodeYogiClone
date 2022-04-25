import React from 'react';
import { VscLinkExternal } from 'react-icons/vsc';
import Button from './Button';
import Popup from './Popup';
import axios from 'axios';
import MDEditor from '@uiw/react-md-editor';
import { DateTime } from 'luxon';
import { string } from 'yup';
import { saveData ,getSavedData,putAssignment} from "./Api";

function AssignmentDetail(props) {
  const savedSubmissionLink = getSavedData(`${props.detailId}`) || [props.href];
	const [submissionLink, changeInput] = React.useState('');
	const [emailError, setEmailError] = React.useState('');
	const [validEmail, setValidEmail] = React.useState(true);
	const [showPopup, setPopup] = React.useState(false);
	

	const onSubmit = () => {
		const emailValidator = string().url('URL is not valid ');
		try {
			emailValidator.validateSync(submissionLink);
		} catch (e) {
			setValidEmail(false);
			setEmailError(e.message);

			return;
		}
		putAssignment(props.detailId,submissionLink)
		saveData(`${props.detailId}`, submissionLink);
		setValidEmail(true);
		setPopup(false);
		changeInput('');
	};

	const onInputChange = event => {
		changeInput(event.target.value);
	};

	const onShowPopup = () => {
		setPopup(true);
	};
	const onPopupClose = () => {
		setPopup(false);
		setValidEmail(true);
		setPopup(false);
		changeInput('');
	};
	return (
		<div className="rounded-lg p-4 m-4 bg-white space-y-4    shadow-2xl ">
			{showPopup && (
				<Popup
					placeHolder="Submission link "
					validEmail={validEmail}
					emailError={emailError}
					onPopupClose={onPopupClose}
					assignNum={props.detailId}
					onSubmit={onSubmit}
					value={submissionLink}
					onChange={onInputChange}
				/>
			)}
			<h1 className="text-2xl p-2 border-b-2 font-black ">Assignment Detail</h1>

			<div className="flex  text-gray-400 p-2 border-b-2">
				<h1 className="w-40">TITLE:</h1>
				<h1>{props.title}</h1>
			</div>

			<div className="flex   text-gray-400 p-2 border-b-2">
				<h1 className="w-40">Due Date</h1>
				<h1>
					{DateTime.fromISO(props.dueDate).toLocaleString(
						DateTime.DATETIME_MED
					)}
				</h1>
			</div>

			<div className="flex  p-2 text-gray-400  border-b-2">
				<h1 className="flex items-center w-40">Discription</h1>
				<h1>
					{' '}
					<MDEditor.Markdown
						className="!text-gray-400"
						source={props.discription}
					/>
				</h1>
			</div>
			<div className="p-2 flex ">
				<Button onClick={onShowPopup} input="Re-submit" />
				<span className="grow" />
				<a href={savedSubmissionLink} target="blank">
					<h1 className="relative top-8 right-4 text-indigo-400 text-xl">
						<VscLinkExternal />
					</h1>
					<h1 className="text-xl font-bold m-2  underline text-indigo-400">
						{' '}
						See Your Submission
					</h1>
				</a>{' '}
			</div>
			{props.datePassed && (
				<h1 className="text-red-600">
					The due date has passed for this assignment,any submission will count
					as a late submission now.{' '}
				</h1>
			)}
		</div>
	);
}

export default AssignmentDetail;

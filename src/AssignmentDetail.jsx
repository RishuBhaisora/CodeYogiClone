import React from 'react';
import { VscLinkExternal } from 'react-icons/vsc';
import Button from './Button';
import Popup from './Popup';
import axios from 'axios';
import MDEditor from '@uiw/react-md-editor';
import { DateTime } from 'luxon';
import urlSubmission from "./urlSubmission";

function AssignmentDetail(props) {
 
	const {Form_Data,savedSubmissionLink}=urlSubmission(props)

	return (
		<div className="rounded-lg p-4 m-4 bg-white space-y-4    shadow-2xl ">
			{Form_Data.formData.showPopup && (
				<Popup
					placeHolder="Submission link "
					validUrl={Form_Data.formData.validUrl}
					urlError={Form_Data.formData.urlError}
					onPopupClose={Form_Data.onPopupClose}
					assignNum={props.detailId}
					onSubmit={Form_Data.onSubmission}
					value={Form_Data.values.submissionLink}
					onChange={Form_Data.onInputChange}
					touched={Form_Data.touched}
					onBlur={Form_Data.handleBlur}
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
				<Button onClick={Form_Data.onShowPopup} input="Re-submit" />
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

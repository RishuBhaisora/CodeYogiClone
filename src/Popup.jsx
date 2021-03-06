import React from 'react';
import Button from './Button';
import { GiCancel } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

function Popup(props) {
	
	return (
    <form  onSubmit={props.onSubmit}  >
		<div className=" h-screen w-full fixed top-0 p-32 left-0 bg-opacity-75 bg-gray-500 ">
			<div className="relative border p-3 py-8 max-w-md mx-auto  border-black border-y-3  rounded-md bg-white">
				<div className="absolute top-2 right-2 text-xl text-red-600">
					<GiCancel onClick={props.onPopupClose} />
				</div>
				<div className="h-5">
					{' '}
					{!props.validUrl && props.touched && (
						<h2 className="text-red-400">({props.urlError})</h2>
					)}
				</div>
				<div className="  flex ">
					<h1 className="font-bold text-gray-500 mt-3">Submission Link </h1>

					<input
            type={props.type ||""}
            required
            onBlur={props.onBlur}
						placeholder={props.placeHolder}
						value={props.value}
						onChange={props.onChange}
						className="border-2  rounded-md ml-10 border-indigo-500 p-3"
					/>
				</div>
				<Button input="submit" />
			</div>
		</div></form>
	);
}

export default Popup;

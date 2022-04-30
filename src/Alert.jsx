import React from 'react';
import { GiCancel } from 'react-icons/gi';
import {useContext} from "react"
import  AlertContext  from './AlertContext';

function Alert() {
  
  const alert =useContext(AlertContext)
	 
	return (
		<div>
			{ alert.message &&
				<div className="fixed right-1 p-5 rounded-md bg-green-600  text-white text-xl">
					<span> {alert.message}</span>
          <span  className="fixed right-1 top-1">
					<GiCancel
						className="text-red-400 text-xl"
						onClick={() => alert.setMessage("")}
					/></span>
				</div>
			}
		</div>
	);
}
export default Alert;

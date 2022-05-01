import React from 'react';
import { GiCancel } from 'react-icons/gi';
import cn from "classnames"

const Alert =( {alert,removeAlert})=> {
  
 const alertTheme=cn("mt-2 p-3 rounded-xl flex space-x-2 text-white text-xl",{
   "bg-red-400":alert.type==='error',
   " bg-green-400":alert.type==="success"
 })
  
	return (
		<div>
			{ alert.message &&
				<div className={alertTheme}>
					<span> {alert.message}</span>
          <span  className="">
					<GiCancel
						className=" text-xl"
						onClick={() => removeAlert(alert)}
					/></span>
				</div>
			}
		</div>
	);
}
export default Alert;

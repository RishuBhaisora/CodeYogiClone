import React from 'react';
import { GiCancel } from 'react-icons/gi';
import {useContext} from "react"
import  AlertContext  from './AlertContext';
import cn from "classnames"


function Alert() {
  
  const {alert,setAlert} =useContext(AlertContext)
  if(!alert){
    return <></>
  }
 
 const alertTheme=cn("fixed right-1 p-5 rounded-md  text-white text-xl",{
   "bg-red-400":alert.type==='error',
   " bg-green-400":alert.type===""||"success"
 })
  
	return (
		<div>
			{ alert.message &&
				<div className={alertTheme}>
					<span> {alert.message}</span>
          <span  className="fixed right-1 top-1">
					<GiCancel
						className=" text-xl"
						onClick={() => setAlert(null)}
					/></span>
				</div>
			}
		</div>
	);
}
export default Alert;

import React from 'react';
import Button from "./Button"
import {GiCancel} from 'react-icons/gi';
import {useNavigate} from "react-router-dom";
  
function Popup (props) {
  
  let navigate=useNavigate();
  return (
    <div  className=" h-screen w-full fixed top-0 p-32 left-0 bg-opacity-75 bg-gray-500 ">
    <div className="relative border p-3 py-8   border-black border-y-3  rounded-md bg-white">
      <div   className="absolute top-2 right-2 text-xl text-red-600">
         <GiCancel onClick={props.onPopupClose}></GiCancel>
      </div>
    <div className="  flex ">
    <h1 className="font-bold text-gray-500 mt-3">Submission Link  </h1>
    <input placeholder={props.placeHolder} value={props.value} onChange={props.onChange} className="border-2  rounded-md ml-10 border-indigo-500 p-3" ></input>
      
      </div>
      <Button onClick={props.onSubmit}  input="submit"></Button>
    </div></div>
  );
}

export default Popup;
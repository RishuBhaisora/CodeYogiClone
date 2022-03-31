import React from 'react';
import { VscLinkExternal } from 'react-icons/vsc';
function Lecture(props) {
  
  return (
    <div className=" p-4 m-4 bg-white space-y-4 h-fit  shadow-2xl ">
    <div className="flex flex-col ">
    <div className="flex space-x-4 font-bold text-xl ">   
    <h1 >Lecture #{props.count} <span className="text-gray-500">{props.date}</span></h1>
   
    </div>  
    <h2 className="text-gray-500">Duration {props.duration}</h2>
    </div>   
    <div className="space-y-4">
    <ul className="pl-10 list-disc font-bold text-xl">{  props.children }</ul>
    {props.note && <h1 className="text-xl font-bold">Note:{props.note}</h1> }
    </div>
    <div className="flex text-lg font-bold space-x-2 text-gray-500 pt-6 items-center justify-center">
     <VscLinkExternal/>
    <a>Watch/Download Recording</a>
    </div>
    </div>
  );
}

export default Lecture;
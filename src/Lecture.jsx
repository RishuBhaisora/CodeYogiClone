import React from 'react';

function Lecture(props) {
  
  return (
    <div className=" p-4 m-4 bg-white space-y-4 h-fit  shadow-2xl ">
    <div className="flex flex-col ">
    <div className="flex space-x-4  ">   
    <h1>Lecture #{props.count}</h1>
    <h1>{props.date}</h1>
    </div>  
    <h2>Duration {props.duration}</h2>
    </div>   
    <div className="space-y-2">
    <ul className="pl-10 list-disc">{  props.children }</ul>
    {props.note && <h1>Note:{props.note}</h1> }
    </div>
    <div className="flex pt-6 items-center justify-center">
    <a>watch and download recordings</a>
    </div>
    </div>
  );
}

export default Lecture;
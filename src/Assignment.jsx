import React from 'react';
function Assignment(props) {
  
  return (
    
    <div className=" p-4 m-4 bg-white space-y-4 h-fit w-full shadow-2xl ">
    <div className="flex flex-col ">
    <div className="flex space-x-4  ">   
    <h1>#{props.count}{props.about}</h1>
    <h1>{props.date}</h1>
    </div>  
    <h2>DuE DATE:{props.dueDate} </h2>
    </div>   
    <div className="space-y-2">
    
    <h1>SUBMITTED</h1> 
    </div>
    <div className="flex pt-6 items-center justify-center">
    <h1>RESUBMIT</h1>
    </div>
    </div> 
  );
}

export default Assignment;
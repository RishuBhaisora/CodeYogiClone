import React from 'react';

function AssignmentDetail(props) {
  
  return (
    <div className=" p-4 m-4 bg-white space-y-4 h-fit  shadow-2xl ">
    <div className="flex flex-col ">
    <div className="flex flex-col space-x-4  ">   
    <h1>TITLE: </h1>
    <h1>{props.title}</h1>
    </div> 
    <div className="flex flex-col ">
    <h1>Due Date</h1>
    <h2>{props.dueDate}</h2>
    </div>   
   <div className="flex pt-6 items-center justify-center">
   <h1>Discription</h1>
   <h1>{props.discription}</h1>
     
    </div>
    </div>
    
    </div>
  );
}

export default AssignmentDetail;
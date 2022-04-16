import React from 'react';
import Assignment from './Assignment';
import axios from "axios";


function AssignmentList(props) {
 
const [assignmentData,setData ]=React.useState([])

   React.useEffect(()=>{
  const token =
    axios.get("https://api.codeyogi.io/batches/1/assignments",{
    withCredentials:true,
  });
  token.then((response)=>{
 //    const savedSubmissionLink=JSON.parse(localStorage.getItem('submissionLink')) || [];
 // localStorage.setItem('submissionLink', JSON.stringify(submissionLink));
    setData(response.data);
    console.log(response.data)
  })
  },[]);
   
  
  return (
    
    
    <div className="m-10 bg-gray-100 p-4 h-fit w-full rounded-md">
   <h1 className="text-2xl pl-3 pt-2 font-black ">Assignment List</h1>
   { assignmentData.map(d=><Assignment key={d.id} detailId={d.id}  count={d.id} href={d.submissions[0].submission_link}  about={d.title} date={d.created_at} dueDate={d.due_date} >
     
    </Assignment>)}
     
    </div>
    
  );
}

export default AssignmentList;
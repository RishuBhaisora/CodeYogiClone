import React from 'react';
import Assignment from './Assignment';
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";


function AssignmentList(props) {
 
const [assignmentData,setData ]=React.useState([])
  
   React.useEffect(()=>{
  const token =
    axios.get("https://api.codeyogi.io/batches/1/assignments",{
    withCredentials:true,
  });
  token.then((response)=>{
    setData(response.data);
    console.log(response.data)
  })
  },[]);
   
  let navigate=useNavigate();
  return (
    <div className="flex flex-col ">
    <h1 className="text-2xl pl-3 pt-2 font-black ">Assignment List</h1>
    <div className="m-10 bg-gray-100 p-4  rounded-md">
    
   { assignmentData.map(d=><div key={d.id} onClick={()=>navigate(`/assignments/${d.id}/detail`)}><Assignment  count={d.id} about={d.title} date={d.created_at} dueDate={d.due_date} >
    
    </Assignment></div>)}
     
    </div></div>
    
  );
}

export default AssignmentList;
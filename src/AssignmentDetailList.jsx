import React from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import AssignmentDetail from './AssignmentDetail';


function AssignmentDetailList() {
   
const [detailsData,setData ]=React.useState([])
  const stringParams=useParams();
  const numberParams=(+stringParams.id);


  const[ href,setHref]=React.useState('');
   React.useEffect(()=>{
  const token =
    axios.get( `https://api.codeyogi.io/assignments/${numberParams}`,{
    withCredentials:true,
  });
  token.then((response)=>{
    setData(response.data);
    setHref(response.data.submissions[0].submission_link);
    console.log(response.data)
   
  })
  },[]);
  
   
  return (
 <>
  <div className=" m-10 bg-gray-100 p-4 h-fit w-full rounded-md">
  
  <AssignmentDetail key={detailsData.id} datePassed={true} dueDate={detailsData.due_date} href={href} title={detailsData.title} discription={detailsData.description}></AssignmentDetail></div>
 </>
   
   );
}

export default AssignmentDetailList;

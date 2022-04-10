import React from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import AssignmentDetail from './AssignmentDetail';


function AssignmentDetailList() {
   
const [detailsData,setData ]=React.useState([])
  const stringParams=useParams();
  const numberParams=(+stringParams.id);
   
   React.useEffect(()=>{
  const token =
    axios.get( `https://api.codeyogi.io/batches/1/assignments/:${numberParams}`,{
    withCredentials:true,
  });
  token.then((response)=>{
    // setData(response.data);
    console.log(response.data)
  })
  },[]);
  
 
  const newData=detailsData.map(d=><><div className=" m-10 bg-gray-100 p-4 h-fit w-full rounded-md">
  
  <AssignmentDetail key={d.id} datePassed={d.datePassed} dueDate={d.dueDate} title={d.title} discription={d.discription}></AssignmentDetail></div></> );
   
  return (
 <>
   {newData}
 </>
   
   );
}

export default AssignmentDetailList;

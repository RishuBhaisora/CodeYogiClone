import React from 'react';
import Lecture from './Lecture';
import axios from "axios";

 
function LecturesList() {
  
 const [lectureData,setData ]=React.useState([])
   React.useEffect(()=>{
  const token =
    axios.get("https://api.codeyogi.io/batches/1/sessions",{
    withCredentials:true,
  });
  token.then((response)=>{
    setData(response.data);
    console.log(response.data)
  })
  },[]);
  
  
  return (
    <div className="m-10 bg-gray-100 p-4 h-fit w-full rounded-md">
      <h1 className="text-2xl font-black ">Lecture List </h1>
   { lectureData.map(d=>  <Lecture key={d.id}  {...d} >
    </Lecture>)}
    </div>
  );
}

export default LecturesList;
 
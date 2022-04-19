import React from 'react';
import Lecture from './Lecture';
import axios from "axios";
import {DateTime} from "luxon";
import {getLectures} from "./Api"


function LecturesList() {
  
 const savedAssignments=JSON.parse(localStorage.getItem('lectures')) || []; 
 const [lectureData,setData ]=React.useState(savedAssignments)
  
   React.useEffect(()=>{

  getLectures.then((response)=>{
    setData(response.data);
    localStorage.setItem('lectures', JSON.stringify(response.data));
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
 
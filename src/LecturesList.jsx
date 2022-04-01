import React from 'react';
import Lecture from './Lecture';
import lectureData from './mockData/dataLecture';

 
function LecturesList() {
   const data=lectureData;
  
  return (
    <div className="m-10 bg-gray-100 p-4 h-full w-full rounded-md">
      <h1 className="text-2xl font-black ">Lecture List </h1>
   { data.map(d=><Lecture key={d.id}  count={d.id} date={d.date}
    duration={d.duration}  note={d.note}>
    {d.topics.map (t=><li key={t}>{t}</li> )}
    </Lecture>)}
    </div>
  );
}

export default LecturesList;
 
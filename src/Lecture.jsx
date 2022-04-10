import React from 'react';
import { VscLinkExternal } from 'react-icons/vsc';
import MDEditor from "@uiw/react-md-editor";

function Lecture({listLectures}) {
  
  return (
    <div className=" p-4 m-4 bg-white space-y-4 h-fit  shadow-2xl ">
    <div className="flex flex-col ">
    <div className="flex space-x-4 font-bold text-xl ">   
    <h1 >Lecture #{listLectures.id-2} <span className="text-gray-500">
    <MDEditor.Markdown source={listLectures.created_at}/></span></h1>
   
    </div>  
    <h1 className="text-gray-500">
    Duration <MDEditor.Markdown source={listLectures.end_time}/></h1>
    </div>   
    <div className="space-y-4">
    <div className="pl-10 list-disc font-bold text-xl">
      <MDEditor.Markdown source={listLectures.topic }/></div>
   
    </div>
    <div className="flex text-lg font-bold space-x-2 text-gray-500 pt-6 items-center justify-center">
     <VscLinkExternal/>
    <a>Watch/Download Recording</a>
    </div>
    </div>
  );
}

export default Lecture;
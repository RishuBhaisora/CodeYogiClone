import React from 'react';
import SideBarItems from './SideBarItems';
import { Outlet,Link} from "react-router-dom";
import { MdOutlineQuiz, MdPeopleAlt,MdOutlineAssignment } from 'react-icons/md';
import { GiTeacher } from 'react-icons/gi';
import LecturesList from './LecturesList';
import { CgProfile } from 'react-icons/cg';
import AssignmentList from './AssignmentList';


function SideBar() {
  return (
    <>
     <div className="flex bg-gray-800  h-screen">
     <div className="flex flex-col">  
    <div className="p-5  space-y-4 flex flex-col   w-1/4  ">
    <h1 className="text-3xl  font-black text-white">CODEYOGI</h1>
      
     <Link  to="/quiz"> <SideBarItems onClick="Quiz" ><MdOutlineQuiz/></SideBarItems></Link>
      <Link to="/lectures"> <SideBarItems onClick="Lectures" ><GiTeacher/></SideBarItems></Link>
      <Link to="/students"> <SideBarItems onClick="Students" ><MdPeopleAlt/></SideBarItems></Link>
      <Link to="/assignments"> <SideBarItems onClick="Assignment" ><MdOutlineAssignment/></SideBarItems></Link>
     
    </div>
       <span className="grow"></span>
      <div className="p-5" >
       <Link to="/profile"> <SideBarItems onClick="Profile" ><CgProfile/></SideBarItems></Link> </div></div>
    <div className="bg-gray-200 flex overflow-scroll w-full">
      
      <Outlet/>
    </div>  
    </div>   
    </>
  );
}

export default SideBar;
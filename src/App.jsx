import React from 'react';
import SideBar from './SideBar';
import LecturesList from './LecturesList';
import AssignmentList from './AssignmentList';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import NoPage from './NoPage';
import QuizPage from './QuizPage';
import AssignmentDetailList from './AssignmentDetailList';
import ProfilePage from './ProfilePage';

function App() {
  
  return (
   <BrowserRouter>
      <Routes>
        
          <Route path="lecture" element={<QuizPage />} />
          <Route path="/" element={<SideBar/>}>
          <Route index element={<Navigate to="/lectures" />} /> 
          <Route path="assignments" element={<AssignmentList />} />
          <Route path="lectures" element={<LecturesList />} />
          <Route path="profile" element={<ProfilePage />} />  
          <Route path="assignments/:id/detail" element={<AssignmentDetailList />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

 
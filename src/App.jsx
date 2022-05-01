import React from 'react';
import SideBar from './SideBar';
import LecturesList from './LecturesList';
import AssignmentList from './AssignmentList';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NoPage from './NoPage';
import QuizPage from './QuizPage';
import AssignmentDetailList from './AssignmentDetailList';
import ProfilePage from './ProfilePage';
import UserProfileList from './UserProfileList';
import  AlertContext  from './AlertContext';
import Alert from './Alert';

function App() {
  
	const [alert, setAlert] = React.useState(null);
	return (
		<AlertContext.Provider
			value={{ alert,setAlert }}
		>
			<Alert />
			<BrowserRouter>
				<Routes>
					<Route path="quiz" element={<QuizPage />} />
					<Route path="/" element={<SideBar />}>
						<Route index element={<Navigate to="/lectures" />} />
						<Route path="students" element={<UserProfileList />} />
						<Route path="assignments" element={<AssignmentList />} />
						<Route path="lectures" element={<LecturesList />} />
						<Route path="profile" element={<ProfilePage />} />
						<Route
							path="assignments/:id/detail"
							element={<AssignmentDetailList />}
						/>
					</Route>
					<Route path="*" element={<NoPage />} />
				</Routes>
			</BrowserRouter>
		</AlertContext.Provider>
	);
}

export default App;

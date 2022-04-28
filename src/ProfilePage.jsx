import React from 'react';
import {FiLoader} from 'react-icons/fi';

import { getProfile } from './Api';
import Profile from './Profile';


const ProfilePage = () => {
  const [show,setShow]=React.useState(false);
	const [profileData, setProfileData] = React.useState({});
  
	React.useEffect(() => {
		const promise=getProfile()
    promise.then(response => {
		setProfileData(response);
    setShow(true)  
      
		});
	}, []);
	
	return (
   <>
     {!show && ( <FiLoader className="w-20 h-20 mx-auto my-auto "></FiLoader>)} 
    {show && (<Profile profileData={profileData} ></Profile>)}
   </>
	);
};
export default ProfilePage;

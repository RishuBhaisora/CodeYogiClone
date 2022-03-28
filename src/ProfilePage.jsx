import React from 'react';
import { Link} from "react-router-dom";
function ProfilePage() {
  return (<>
   <div className="  flex items-center justify-center h-screen w-screen bg-black text-white"> ProfilePage<Link to="/lectures">Go Back</Link></div>
    
  </> );
}

export default ProfilePage;

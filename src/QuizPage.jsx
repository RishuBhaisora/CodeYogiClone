import React from 'react';
import { Link} from "react-router-dom";
function QuizPage() {
  return (<>
   <div className=" flex items-center justify-center h-screen w-screen bg-yellow-300"> Quiz page<Link to="/lectures">Go Back</Link></div>
    
  </> );
}

export default QuizPage;

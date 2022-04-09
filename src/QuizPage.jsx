import React from 'react';
import { Link} from "react-router-dom";
import axios from "axios";
function QuizPage() {
  const token = axios.get("https://api.codeyogi.io/batches/1/sessions",{
    withCredentials:true,
  });
  token.then((response)=>{
  console.log(response.data)
  })
  return (<>
   <div className=" flex items-center justify-center h-screen w-screen bg-yellow-300"> Quiz page<Link to="/lectures">Go Back</Link></div>
            
  </> );
}

export default QuizPage;

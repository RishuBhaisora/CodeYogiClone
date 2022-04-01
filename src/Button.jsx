import React from 'react';

const Button = (props) => {
  
  
  return(
    <>
    <button onClick={props.onClick} className='p-2 bg-indigo-600 text-white border rounded-md  font-bold ' >{props.input}</button>
    </>
  )
  
}
export default  Button;
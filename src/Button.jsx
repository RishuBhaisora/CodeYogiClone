import React from 'react';

const Button = (props) => {

  
  return(
    <>
    <button type={props.type} onClick={props.onClick} className='p-2  text-white border bg-indigo-600 rounded-md text-xl font-bold ' >{props.input}</button>
    </>
  )
  
}
export default  Button;
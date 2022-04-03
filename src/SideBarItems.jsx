import React from 'react';

function SideBarItems(props) {
  return (
    <>
      
    <div className="flex">
    <div className="text-white space-x-2 text-2xl">{props.children}</div>  
    <h1 className="text-xl  font-bold text-white">{props.onClick}</h1>
    </div>  
   
    </>
  );
}

export default SideBarItems;
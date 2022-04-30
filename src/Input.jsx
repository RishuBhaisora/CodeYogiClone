import React from 'react';
import {useField} from 'formik';

const Input= ({ id, name, type,holder}) => {
  const [field,meta] = useField(name);
  
	return (
		<div className=" bg-white p-2 items-center border-b-2 border-gray-300 space-x-4 flex">
      <div className="w-1/2">{ holder}</div>
      {meta.error && meta.touched && (
						<h2 className="text-red-400">({meta.error})</h2>
					)}
			<input
        {...field}
				id={id}
				name={name}
				type={type || "text"}
				placeholder={holder}
				className=" p-2 border-b-2 border-rose-700 rounded-md w-full "
			/>
		</div>
	);
};

export default Input;

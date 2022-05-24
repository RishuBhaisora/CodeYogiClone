import React from 'react';
import withFormikInput from "./withFormikInput"

const Input = ({ id, name, type, holder, error, touched,defaultValue, ...rest }) => {
  
  return (
    <div className=" bg-white p-2 items-center border-b-2 border-gray-300 space-x-4 flex">
      <div className="w-1/2">{holder}</div>
      {error &&
        touched && <h2 className="text-red-400">({error})</h2>}
      <input
        {...rest}
        id={id}
        name={name}
        type={type}
        placeholder={holder}
        className=" p-2 border-b-2 border-rose-700 rounded-md w-full "
      />
    </div>
  );
};
export const FormikInput = withFormikInput(Input)
export default Input;

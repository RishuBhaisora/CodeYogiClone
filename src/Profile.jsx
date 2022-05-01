import React from 'react';
import Input from './Input';
import Button from './Button';
import { Formik , Form } from 'formik';
import { DateTime } from 'luxon';
import { object, string,number } from 'yup';

const Profile = ({ profileData , showAlert }) => {
  
	const validationSchema = object().shape({
    first_name: string().required().max(12),
    last_name: string().required().max(15),
    email: string().required().email(),
    year_of_pass_out: number().positive(),
    phone_no: number().required().positive(),
    branch: string().required(),
  })
	 const onSubmit=()=>{
    console.log("success") 
    showAlert("Updated Successfully") 
   }
	const dateString = profileData.date_of_birth;
	const dateObject = DateTime.fromISO(dateString);
	const dateHumanReadable = dateObject.toLocaleString(DateTime.DATE_SHORT);
	const initialValues = {
		first_name: profileData.first_name,
		last_name: profileData.last_name,
		email: profileData.email,
		branch: profileData.branch,
		year_of_pass_out: profileData.year_of_pass_out,
		phone_no: profileData.phone_no,
		date_of_birth: dateHumanReadable
	};

	return (
		<Formik
			initialValues={initialValues}
      onSubmit={onSubmit}
			
			validationSchema={validationSchema}
		>
			<div className="bg-white w-full">
				<Form>
					<h1 className="text-2xl font-bold p-2 bg-green-200  border-b-2 border-gray-700">
						Personal Detail
					</h1>

					<Input key="first_name" name="first_name" holder=" First name " />

					<Input key="last_name" name="last_name" holder=" last name  " />

					<Input
						key="email"
						name="email"
						type="email"
						holder=" Email address "
					/>

					<Input key="branch" name="branch" holder="Institute Name " />

					<Input
						key="year_of_pass_out"
						name="year_of_pass_out"
						holder=" Year off pass out  "
					/>

					<Input
						key="phone_no"
						name="phone_no"
						type="number"
						holder=" Phone number "
					/>
					<Input
						key="date_of_birth"
						name="date_of_birth"
						holder=" Date of birth "
					/>

					<div className="p-4 border-b-2 border-gray-300 ">
						<Button type="submit" input="Update" />
					</div>
				</Form>
			</div>
		</Formik>
	);
};

export default Profile;

import React from 'react';
import Input from './Input';
import Button from './Button';
import { useFormik } from 'formik';
import { DateTime } from 'luxon';

const Profile= ({profileData}) => {
  const onSubmit = (event) => {
		console.log('hiii',event);
	};

  	const dateString = profileData.date_of_birth;
	const dateObject = DateTime.fromISO(dateString);
	const dateHumanReadable = dateObject.toLocaleString(DateTime.DATE_SHORT);
  
	const { handleSubmit, handleChange, values } = useFormik(
		{
			initialValues: {
				first_name:profileData.first_name,
				last_name: profileData.last_name,
        email:profileData.email,
        branch: profileData.branch,
        year_of_pass_out: profileData.year_of_pass_out,
        phone_no: profileData.phone_no,
        date_of_birth:dateHumanReadable,
        
			},
      onSubmit
		});

	return (
		<div className="bg-white w-full">
			<h1 className="text-2xl font-bold p-2  border-b-2 border-gray-700">
				Personal Detail
			</h1>
			<form onSubmit={handleSubmit}>
				<Input
					key="first_name"
					onChange={handleChange}
					value={values.first_name}
					name="first_name"
					id="first_name"
					holder=" First name "
					title="First Name"
				/>

				<Input
					onChange={handleChange}
					key="last_name"
					value={values.last_name}
					name="last_name"
					holder=" last name  "
					title="Last Name"
				/>

				<Input
					key="email"
					onChange={handleChange}
					value={values.email}
					name="email"
					type="email"
					holder=" Email address "
					title="Email Address"
				/>

				<Input
					key="branch"
					onChange={handleChange}
					value={values.branch}
					name="branch"
					holder="Institute Name "
					title="Institute Name"
				/>

				<Input
					key="year_of_pass_out"
					onChange={handleChange}
					value={values.year_of_pass_out}
					name="year_out"
					holder=" Year off pass out  "
					title="Year off paas out "
				/>

				<Input
					key="phone_no"
					onChange={handleChange}
					value={values.phone_no}
					name="phone_number"
					holder=" Phone number "
					title="Phone Number"
				/>
				<Input
					key="date_of_birth"
					onChange={handleChange}
					value={values.date_of_birth}
					name="dob"
					holder=" Date of birth "
					title="Date of Birth"
				/>

				<div className="p-4 border-b-2 border-gray-300 ">
					<Button type="submit" input="Update" />
				</div>
			</form>
		</div>
	);
};

export default Profile;

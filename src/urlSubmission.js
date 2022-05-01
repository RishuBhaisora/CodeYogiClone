import {  getSavedData, putAssignment } from './Api'
import { string } from 'yup';
import { useForm } from './urlForm';
import {useContext} from "react"
import  AlertContext  from './AlertContext';

const urlSubmission =(props)=>{
  const savedSubmissionLink =  getSavedData(`${props.detailId}`) || [props.href];
   const urlValidator = string().url('URL is not valid ');
  const {showAlert} =useContext(AlertContext)  
  
	const onSubmit = () => {
		putAssignment(props.detailId, values.submissionLink);
    showAlert("Submitted Successfully",) 
    
	};

  
	const {
		formData,
    touched,
    values,
		onInputChange,
		onShowPopup,
		onPopupClose,
		onSubmission,
    handleBlur,
      } = useForm(
		{
			submissionLink: '',
			
		},{urlError: '',
			validUrl: true,
			showPopup: false},
		onSubmit,
    urlValidator
	);
  const Form_Data={
		formData,
    touched,
    values,
		onInputChange,
		onShowPopup,
		onPopupClose,
		onSubmission,
    handleBlur,
      };
  return {Form_Data,savedSubmissionLink}
}
export default urlSubmission;
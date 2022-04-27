import React from "react"
import { string } from 'yup';

export const useForm = (innitialValue, onSubmit) => {
  const [formData, setFormData] = React.useState(innitialValue)

  const onSubmission = () => {
    event.preventDefault();
    const urlValidator = string().url('URL is not valid ');
    try {
      urlValidator.validateSync(formData.submissionLink);
    } catch (e) {
      setFormData({ ...formData, urlError: e.message, validUrl: false });
      console.log(e.message);
      return;
    }
    onSubmit()
    setFormData({
      ...formData,
      submissionLink: '',
      validUrl: true,
      showPopup: false
    });

  }
  const onInputChange = event => {
    setFormData({ ...formData, submissionLink: event.target.value });
  };
  const onShowPopup = () => {
    setFormData({ ...formData, showPopup: true });
  };
  const onPopupClose = () => {
    setFormData({
      ...formData,
      submissionLink: '',
      validUrl: true,
      showPopup: false
    });
  };

  return [formData, onInputChange, onShowPopup, onPopupClose, onSubmission]
}
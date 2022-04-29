import React from "react"


export const useForm = (innitialValue, innitialData, onSubmit, urlValidator) => {
  const [values, setValues] = React.useState(innitialValue)
  const [formData, setFormData] = React.useState(innitialData)
  const [touched, setTouched] = React.useState(false)



  const onSubmission = () => {
    event.preventDefault();

    try {
      urlValidator.validateSync(values.submissionLink);
    } catch (e) {
      setFormData({ ...formData, urlError: e.message, validUrl: false });
      setTouched(true);

      return;
    }
    onSubmit()
    setFormData({
      ...formData,
      validUrl: true,
      showPopup: false
    });
    setValues({ ...values, submissionLink: '' });
    setTouched(false);
  }
  const handleBlur = () => {

    setTouched(true);

  };

  const onInputChange = event => {
    setValues({ ...values, submissionLink: event.target.value });

    try {
      urlValidator.validateSync(values.submissionLink);
      setFormData({ ...formData, validUrl: true });
      setTouched(false);
    } catch (e) {
      setFormData({ ...formData, urlError: e.message, validUrl: false });
      console.log(e.message);
      return;
    }

  };
  const onShowPopup = () => {
    setFormData({ ...formData, showPopup: true });
  };
  const onPopupClose = () => {
    setFormData({
      ...formData,
      validUrl: true,
      showPopup: false
    });
    setValues({ ...values, submissionLink: '' });
    setTouched(false);
  };

  return { formData, onInputChange, onShowPopup, onPopupClose, onSubmission, touched, values, handleBlur }
}
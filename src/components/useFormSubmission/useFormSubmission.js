import { useFormik } from 'formik';
import { addBlogSchema } from '../validation/Validate';
import { useNavigate } from "react-router-dom";

function useFormSubmission(initialValues, onSubmitCallback) {
  const navigate = useNavigate();

  const handleSubmit = async (values, formikBag) => {
    
    try {
      await onSubmitCallback(values);
      formikBag.resetForm();
      navigate('/blogs');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: addBlogSchema,
  });

  

  return { onChange:formik.handleChange,  errors:formik.errors, onBlur:formik.handleBlur, 
    touched:formik.touched, values:formik.values, onSubmit:formik.handleSubmit,
  isValid:formik.isValid, isDirty:formik.dirty};
}

export default useFormSubmission;
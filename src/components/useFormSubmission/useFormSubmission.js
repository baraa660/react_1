import { useFormik } from 'formik';
import { addBlogSchema } from '../validation/Validate';

function useFormSubmission(initialValues, onSubmitCallback) {
  

  const handleSubmit = async (values, formikBag) => {
    
    try {
      await onSubmitCallback(values);
      formikBag.resetForm();
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

  return { formik };
}

export default useFormSubmission;
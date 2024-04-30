import { useFormik } from 'formik';
import { addBlogSchemaEn, addBlogSchemaAr} from '../../components/validation/Validate';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'

function useFormSubmission(initialValues, onSubmitCallback) {

  const { i18n } = useTranslation();

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
    validationSchema: i18n.dir() === "ltr" ? addBlogSchemaEn : addBlogSchemaAr,
  });

  

  return { onChange:formik.handleChange,  errors:formik.errors, onBlur:formik.handleBlur, 
    touched:formik.touched, values:formik.values, onSubmit:formik.handleSubmit,
  isValid:formik.isValid, isDirty:formik.dirty};
}

export default useFormSubmission;
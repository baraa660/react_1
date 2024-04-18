import React  from 'react'
import styles from './AddCard.module.css'
import Input from '../shared/Input';
import BlogsServices from '../../services/Blogs'
import useFormSubmission from '../useFormSubmission/useFormSubmission'

function AddCard({setContentData}) {

  const initialValues = {
    title: '',
    description: '',
    liked:0,
    unliked:0
  };

  const onSubmitCallback = async (values) => {
    await BlogsServices.handleSubmit(values, setContentData);
  };

  const { formik } = useFormSubmission(initialValues, onSubmitCallback);   //custom hook 

  return (
    <section className={styles.form_section}>
      <h2>Add New Card</h2>
      <br />
      <br />
      <form className={styles.dataForm} id="dataForm" onSubmit={formik.handleSubmit}>
      <Input
          id="title"
          name="title"
          type="text"
          maxLength={50}
          value={formik.values.title}
          errors={formik.errors}
          onblur={formik.handleBlur}
          onchange={formik.handleChange}
          touched={formik.touched}
        />
        <Input
          id="description"
          name="description"
          type="textarea"
          value={formik.values.description}
          errors={formik.errors}
          onblur={formik.handleBlur}
          onchange={formik.handleChange}
          touched={formik.touched}
        />
        <br />
        {
        //formik.dirty indicates whether any field in the form has been touched.
        /*i added formik.dirty due to the initial render maybe occurring before Formik
         has had a chance to run its validation checks (maybe i think)
         */
        }
        <input type="submit" value="Submit" disabled={!formik.isValid || !formik.dirty} />
      </form>
    </section>
  );
}

export default AddCard

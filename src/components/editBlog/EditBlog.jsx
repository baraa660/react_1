import React from 'react'
import BlogsServices from '../../services/Blogs';
import useFormSubmission from '../useFormSubmission/useFormSubmission';
import Input from '../shared/Input';
import styles from './EditBlog.module.css'
import { useParams } from 'react-router-dom';

function EditBlog({contentData,setContentData}) {

    const { id } = useParams();

    const blogPost = contentData.find(post => post.id === id);
    
    const initialValues = {   
        title: blogPost?.title,
        description: blogPost?.description,
        liked:0,
        unliked:0 
        
      };

          
   

    
      const onSubmitCallback = async (values) => {
        await BlogsServices.handleEditBlog(id, values, setContentData, contentData);
      };
    
      const {values,errors,onBlur,onChange,touched,onSubmit,isValid,isDirty} = useFormSubmission(initialValues, onSubmitCallback);   //custom hook 
    
      return (
        <section className={styles.form_section} >
          
          <br />
          <form className={styles.dataForm} id="dataForm" onSubmit={onSubmit}>
          <Input
              id="title"
              name="title"
              type="text"
              maxLength={50}
              value={values.title}
              errors={errors}
              onblur={onBlur}
              onchange={onChange}
              touched={touched}
            />
            <Input
              id="description"
              name="description"
              type="textarea"
              value={values.description}
              errors={errors}
              onblur={onBlur}
              onchange={onChange}
              touched={touched}
            />
            <br />
            {
            //formik.dirty indicates whether any field in the form has been touched.
            /*i added formik.dirty due to the initial render maybe occurring before Formik
             has had a chance to run its validation checks (maybe i think)
             */
            }
            <input type="submit" value="Submit" disabled={!isValid || !isDirty} />
          </form>
        </section>
      );
    }

export default EditBlog

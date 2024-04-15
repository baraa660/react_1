import React , {useState} from 'react'

import styles from './AddCard.module.css'
import Input from '../shared/Input';
import BlogsServices from '../../services/Blogs'

function AddCard({setContentData}) {

    const [formData, setFormData] = useState({
        description: '',
        title: '',
        liked:0,
        unliked:0
      });

      const [errors, setErrors] = useState({
        title: '',
        description: ''
      });
    
      const handleChange = (e) => {

        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });

        setErrors({
          ...errors,
          [e.target.name]: ''
        });
      };


    
      

      const validateForm = () => {
        let valid = true;
      
        if (!formData.title.trim() || formData.title.trim().length > 50 || !/^[A-Z]/.test(formData.title.trim())) {
          setErrors(prevErrors => ({
            ...prevErrors,
            title: 'Title must start with a capital letter and be between 1 and 50 characters'
          }));
          valid = false;
        } else {
          setErrors(prevErrors => ({
            ...prevErrors,
            title: ''
          }));
        }
      
        if (!formData.description.trim() || formData.description.trim().length > 500) {
          setErrors(prevErrors => ({
            ...prevErrors,
            description: 'Description must be between 1 and 500 characters'
          }));
          valid = false;
        } else {
          setErrors(prevErrors => ({
            ...prevErrors,
            description: ''
          }));
        }
      
        return valid;
      };
    
      const submitForm = (e) => {
        e.preventDefault();
        if (validateForm()) {
          BlogsServices.handleSubmit(formData,setContentData, setFormData);
          setFormData({
            description: '',
            title: '',
            liked:0,
            unliked:0
          });
        }
      };
    

  return (
    <section className={styles.form_section}>
      <h2>Add New Card</h2>
      <br />
      <br />
      <form className={styles.dataForm} id="dataForm" onSubmit={submitForm}>
      <Input
          id="title"
          name="title"
          type="text"
          maxLength={50}
          value={formData.title}
          onChange={handleChange}
          error={errors.title}
        />
        <Input
          id="description"
          name="description"
          type="textarea"
          value={formData.description}
          onChange={handleChange}
          error={errors.description}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default AddCard

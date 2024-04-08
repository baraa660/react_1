import React , {useState} from 'react'
import axios from 'axios';
import styles from './AddCard.module.css'
import Input from '../shared/Input';

function AddCard({fetchData}) {

    const [formData, setFormData] = useState({
        description: '',
        title: ''
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


    
      const handleSubmit = async (e) => {
          
        try {
          await axios.post('http://localhost:3000/blogs', formData);

          /*
          i fetched data and not just updated directly on contentdata array like updatedCards 
          in deleteCards because if i pushed formData to array it will push it without the id, 
          and when fetch it will update the contentdata and get formData with id, this help me if 
          i wanted to delete formData after add it because i need the id to delete.
          */
          fetchData();
          // Clear form fields after successful submission
          setFormData({
            title: '',
            description: ''
          });

        } catch (error) {
          console.error('Error:', error);
        }
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
          handleSubmit(formData);
          setFormData({
            title: '',
            description: ''
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

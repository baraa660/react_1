import * as yup from 'yup';

export const addBlogSchema = yup.object({
  
    title: yup.string()
      .required('Title is required')
      .max(50, 'Title must be at most 50 characters')
      .matches(/^[A-Z]/, 'Title must start with a capital letter'),
    description: yup.string()
      .required('Description is required')
      .max(500, 'Description must be at most 500 characters'),
  });
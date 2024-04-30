import * as yup from 'yup';

export const addBlogSchemaEn = yup.object({
  
    title: yup.string()
      .required('Title is required')
      .max(50, 'Title must be at most 50 characters')
      .matches(/^[A-Z]/, 'Title must start with a capital letter'),
    description: yup.string()
      .required('Description is required')
      .max(500, 'Description must be at most 500 characters'),
  });

  export const addBlogSchemaAr = yup.object({
    title: yup.string()
      .required('العنوان مطلوب') // "Title is required" in Arabic
      .max(50, 'يجب ألا يتجاوز العنوان 50 حرفًا') // "Title must be at most 50 characters" in Arabic
      .matches(/^[\u0600-\u06FF]/, 'يجب أن يبدأ العنوان بحرف عربي'), // Ensures the title starts with an Arabic letter
    description: yup.string()
      .required('الوصف مطلوب') // "Description is required" in Arabic
      .max(500, 'يجب ألا يتجاوز الوصف 500 حرفًا'), // "Description must be at most 500 characters" in Arabic
  });
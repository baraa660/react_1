import React from 'react'
import EditBlog from '../editBlog/EditBlog.jsx';
import Title from '../title/Title.jsx'
import { useTranslation } from 'react-i18next';

function EditPlogPage() {
    
    const { t } = useTranslation();
    
  return (
    <div>
      <Title data={t("Edit Blog")} />
      <EditBlog />
    </div>
  );
}

export default EditPlogPage

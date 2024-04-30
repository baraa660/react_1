import React from 'react'
import Title from '../title/Title.jsx'
import Blog from '../blog/Blog.jsx'
import { useTranslation } from 'react-i18next';


function BlogPage() {
    const { t } = useTranslation();
  return (
    <>
      <Title data={t("Blog Details")}/>
      <Blog/>
      
      
    </>
  )
}

export default BlogPage

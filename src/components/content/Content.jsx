import React ,{useState,useEffect} from 'react'
import styles from './Content.module.css'
import Title from '../title/Title'
import List from '../list/List'

import AddCard from '../addCard/AddCard';
import BlogsBox from '../blogsBox/BlogsBox';
import BlogsServices from '../../services/Blogs'
import { Route, Routes } from 'react-router-dom';
import Blog from '../blog/Blog';
import EditBlog from '../editBlog/EditBlog';
import { useTranslation } from 'react-i18next';

function Content() {
  const { t } = useTranslation();

  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await BlogsServices.fetchData();
      setContentData(data);
    };

    fetchData();
  }, []);



  return (
    <section className={styles.content}>
         <Routes>
        <Route path="/" element={
          <>
            <Title  data={t('blogs')}/>
            <BlogsBox contentData={contentData} />
            <List contentData={contentData} setContentData={setContentData} />
          </>
        } />

        <Route path="/blogs" element={
          <>
          <Title data={t('blogs')}/>
          <BlogsBox contentData={contentData} />
          <List contentData={contentData} setContentData={setContentData} />
        </>
        } />
       
        <Route path="/addBlog" element={
          <>
          <Title data={t("Add New Blog")}/>
          <AddCard contentData={contentData} setContentData={setContentData} />
          </>
          
        } />

        <Route path="/blog/:id" element={
          <>
          <Blog contentData={contentData} setContentData={setContentData}/>
        </>
        } />

        <Route path="/editBlog/:id" element={
          <>
          <Title data={t('Edit Blog')}/>
          <EditBlog contentData={contentData} setContentData={setContentData} />
          </>
          
        } />
      </Routes>
    </section>

  )
}


export default Content

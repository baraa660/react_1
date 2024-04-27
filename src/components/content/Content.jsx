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

function Content() {

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
            <Title  data={'Blogs'}/>
            <BlogsBox contentData={contentData} />
            <List contentData={contentData} setContentData={setContentData} />
          </>
        } />

        <Route path="/blogs" element={
          <>
          <Title data={'Blogs'}/>
          <BlogsBox contentData={contentData} />
          <List contentData={contentData} setContentData={setContentData} />
        </>
        } />
       
        <Route path="/addBlog" element={
          <>
          <Title data={'Add Blog'}/>
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
          <Title data={'Edit Blog'}/>
          <EditBlog contentData={contentData} setContentData={setContentData} />
          </>
          
        } />
      </Routes>
    </section>

  )
}


export default Content

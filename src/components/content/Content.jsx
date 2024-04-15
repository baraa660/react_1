import React ,{useState,useEffect} from 'react'
import styles from './Content.module.css'
import Title from '../title/Title'
import List from '../list/List'

import AddCard from '../addCard/AddCard';
import BlogsBox from '../blogsBox/BlogsBox';
import BlogsServices from '../../services/Blogs'
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
        <Title/>
        <BlogsBox contentData={contentData}/>
        <List contentData={contentData} setContentData={setContentData} />
        <AddCard contentData={contentData} setContentData={setContentData} />
    </section>

  )
}


export default Content

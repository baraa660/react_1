import React ,{useState,useEffect} from 'react'
import styles from './Content.module.css'
import Title from '../title/Title'
import List from '../list/List'
import  axios from 'axios';
import AddCard from '../addCard/AddCard';
import BlogsBox from '../blogsBox/BlogsBox';
function Content() {

  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/blogs');
      setContentData(response.data);
    } catch (error) {
      console.error('Error:');
    }
  };


  return (
    <section className={styles.content}>
        <Title/>
        <BlogsBox contentData={contentData}/>
        <List contentData={contentData} setContentData={setContentData} fetchData={fetchData}/>
        <AddCard contentData={contentData} setContentData={setContentData} fetchData={fetchData}/>
    </section>

  )
}


export default Content

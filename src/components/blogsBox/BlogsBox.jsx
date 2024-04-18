import React from 'react'
import styles from './BlogsBox.module.css'

function BlogsBox({contentData}) {


    const totalLikes = contentData.reduce((sum, content) => sum + content.liked, 0);
    const totalUnlikes = contentData.reduce((sum, content) => sum + content.unliked, 0);
    

    


    
  return (
    <div className={styles.blog_container}>
    <div className={styles.blog_box}>
      <div className={styles.count_container}>
        <span className={styles.count}>Liked blogs: {totalLikes}</span>
      </div>
      <div className={styles.count_container}>
        <span className={styles.count}>Unliked blogs: {totalUnlikes}</span>
      </div>
    </div>
    </div>
  )
}

export default BlogsBox

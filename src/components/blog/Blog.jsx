import React from 'react'
import styles from './Blog.module.css'
import trash from '../../svg/trash-icon.svg'
import like from '../../svg/like.svg'
import dislike from '../../svg/dislike.svg'
import filledLike from '../../svg/like-filled.svg'
import filledDislike from '../../svg/dislike-filled.svg'
import BlogsServices from '../../services/Blogs'
import Edit from '../../svg/edit.svg'
import { Link, useNavigate, useParams } from "react-router-dom";
function Blog({contentData , setContentData }) {


    const navigate = useNavigate();
    const { id } = useParams();

    const blogPost = contentData.find(post => post.id === id);

    const handleDelete =()=>{
        BlogsServices.deleteCard(blogPost.id, contentData, setContentData)
        navigate('/blogs');
    }
    
  return (
    <div>
      {blogPost?  <div className={styles.list_item} >
          <div className={styles.list_content}>
            <div className={styles.item_desc}>
            <div className={styles.item_header}>
              <h2>{blogPost.title}</h2>
              <Link to={`/editBlog/${blogPost.id}`}><img src={Edit} alt="Edit icon" width={20} height={20}/></Link>
            </div>
              <p>{blogPost.description}</p>
              <div className={styles.action_buttons}>
              {blogPost.liked===0 && blogPost.unliked===0 ?
                <div>
                <button className={styles.like_button}><img src={like} alt=""  onClick={() => BlogsServices.handleLike(blogPost.id,setContentData,contentData)}/></button>
                <button className={styles.like_button}><img src={dislike} alt="" width={15} height={15} onClick={() => BlogsServices.handleDisLike(blogPost.id,setContentData,contentData)} /></button>
                </div>
              
              :blogPost.liked===1?
              <div>
              <button className={styles.clicked_button}><img src={filledLike} alt="" width={25} height={25}/></button>
              <button className={styles.unclicked_button}><img src={dislike} alt="" width={20} height={20}/></button>
              </div>
              :
              <div>
              <button className={styles.unclicked_button}><img src={like} alt="" width={20} height={20}/></button>
              <button className={styles.clicked_button}><img src={filledDislike} alt="" width={25} height={25}/></button>
              </div>
              }
              

              <button className={styles.delete_btn} onClick={handleDelete}>
                <span className="">

                  <img src={trash} alt="" width={15} height={15} />

                </span>
              </button>
              </div>
            </div>
          </div>
        </div> : <div className={styles.empty}><h1>There Is No Blog</h1></div>}
    </div>
  )
}

export default Blog

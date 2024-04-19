import React from 'react';
import styles from './List.module.css'
import trash from '../../svg/trash-icon.svg'
import like from '../../svg/like.svg'
import dislike from '../../svg/dislike.svg'
import filledLike from '../../svg/like-filled.svg'
import filledDislike from '../../svg/dislike-filled.svg'
import BlogsServices from '../../services/Blogs'

function List({contentData , setContentData }) {
    

  return (
    
    <div id="list" className={styles.list}>
      
      {contentData.map(card => (
        <div className={styles.list_item} key={card.id}>
          <div className={styles.list_content}>
            <div className={styles.item_desc}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              {card.liked===0 && card.unliked===0 ?
                <div>
                <button className={styles.like_button}><img src={like} alt=""  onClick={() => BlogsServices.handleLike(card.id,setContentData,contentData)}/></button>
                <button className={styles.like_button}><img src={dislike} alt="" width={15} height={15} onClick={() => BlogsServices.handleDisLike(card.id,setContentData,contentData)} /></button>
                </div>
              
              :card.liked===1?
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

              <button className={styles.delete_btn} onClick={() => BlogsServices.deleteCard(card.id, contentData, setContentData)}>
                <span className="">

                  <img src={trash} alt="" width={15} height={15} />

                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    

    </div>

  )
}

export default List

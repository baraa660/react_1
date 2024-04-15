import React from 'react';
import styles from './List.module.css'
import  axios from 'axios';
import trash from '../../svg/trash-icon.svg'
import like from '../../svg/like.svg'
import dislike from '../../svg/dislike.svg'
import filledLike from '../../svg/like-filled.svg'
import filledDislike from '../../svg/dislike-filled.svg'

function List({contentData , setContentData , fetchData}) {
    
  


const deleteCard = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/blogs/${id}`);
      /* 
      i can fetchData to update contentData like addCard insted of update it directly 
      but like this we reduce the requests from server 
      */
      const updatedCards = contentData.filter(card => card.id !== id);
      setContentData(updatedCards);

    } catch (error) {
      console.error('Error:', error);
    }
  };



  const handleLike = (id) => {
    
    const url = `http://localhost:3000/blogs/${id}`;

    
    const newData = {
      liked: 1 
    };

    //PATCH request options
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    };

    // Send the PATCH request
    fetch(url, requestOptions)
      .then(response => {
        fetchData();
        if (!response.ok) {
          throw new Error('Failed to update card.');
        }
      })
      .catch(error => {
        console.error('Error updating card:', error);
      });
      
  };


  const handleDisLike = (id) => {
    
    const url = `http://localhost:3000/blogs/${id}`;

    
    const newData = {
      unliked: 1 
    };

    //PATCH request options
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    };

    // Send the PATCH request
    fetch(url, requestOptions)
      .then(response => {
        fetchData();
        if (!response.ok) {
          throw new Error('Failed to update card.');
        }
      })
      .catch(error => {
        console.error('Error updating card:', error);
      });
      
  };

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
                <button className={styles.like_button}><img src={like} alt=""  onClick={() => handleLike(card.id)}/></button>
                <button className={styles.like_button}><img src={dislike} alt="" width={15} height={15} onClick={() => handleDisLike(card.id)} /></button>
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

              <button className={styles.delete_btn} onClick={() => deleteCard(card.id)}>
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

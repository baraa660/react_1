import React from 'react';
import styles from './List.module.css'
import  axios from 'axios';
import trash from '../../svg/trash-icon.svg'

function List({contentData, setContentData}) {
    
  


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

  return (
    
    <div id="list" className={styles.list}>
      
      {contentData.map(card => (
        <div className={styles.list_item} key={card.id}>
          <div className={styles.list_content}>
            <div className={styles.item_desc}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <button className={styles.delete_btn} onClick={() => deleteCard(card.id)}>
                <span className="">

                  <img src={trash} alt="" width={20} height={20} />

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


import axios from 'axios';

 class BlogsServices{

    static async fetchData() {  
        try {
          const response = await axios.get('http://localhost:3000/blogs');
          return response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
          return []; // Return an empty array in case of error
        }
      }

      static async handleSubmit(formData, setContentData) {   
        try {
          await axios.post('http://localhost:3000/blogs', formData);
    
          /*
          i fetched data and not just updated directly on contentdata array like updatedCards 
          in deleteCards because if i pushed formData to array it will push it without the id, 
          and when fetch it will update the contentdata and get formData with id, this help me if 
          i wanted to delete formData after add it because i need the id to delete.
          */
          const data = await this.fetchData();
          setContentData(data);
    
        } catch (error) {
          console.error('Error:', error);
        }
      }


    static async deleteCard(id, contentData, setContentData) {
        try {
          await axios.delete(`http://localhost:3000/blogs/${id}`);
          const updatedCards = contentData.filter(card => card.id !== id);
          setContentData(updatedCards);
          
        } catch (error) {
          console.error('Error:', error);
        }
      }

      static async handleLike(id, setContentData, contentData) {
        const url = `http://localhost:3000/blogs/${id}`;
        try {
          const response = await axios.patch(url,  {
            liked:1
          });
        
          if (response.status !== 200) {
            throw new Error('Failed to update card.');
          }

          //get the index of this ID
          const index = contentData.findIndex(obj => obj.id === id)

          contentData[index].liked = 1;

          // the value updated but react will detect it only If I changed it with setcontentdata
          setContentData([...contentData]);
          
        } catch (error) {
          console.error('Error updating card:', error);
        }
      }

      static async handleDisLike(id, setContentData , contentData) {
        
        const url = `http://localhost:3000/blogs/${id}`;
        try {
          const response = await axios.patch(url,  {
            unliked:1
          });
        
          if (response.status !== 200) {
            throw new Error('Failed to update card.');
          }

          //get the index of this ID
          const index = contentData.findIndex(obj => obj.id === id)

          contentData[index].unliked = 1;

          // the value updated but react will detect it only If I changed it with setcontentdata
          setContentData([...contentData]);
          
        } catch (error) {
          console.error('Error updating card:', error);
        }
      }

      static async handleEditBlog(id, formData, setContentData, contentData) {  
        const url = `http://localhost:3000/blogs/${id}`; 

       try {
          const response = await axios.patch(url,formData);
          if (response.status !== 200) {
            throw new Error('Failed to update card.');
          }

          //get the index of this ID
          const index = contentData.findIndex(obj => obj.id === id)
          
          contentData[index] = {...formData,id:id};

          // the value updated but react will detect it only If I changed it with setcontentdata
          setContentData([...contentData]);

          
        } catch (error) {
          console.error('Error updating card:', error);
        }



    }}

    export default BlogsServices;



    
 

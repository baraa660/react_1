import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Content from '../components/content/Content';
import BlogsBox from '../components/blogsBox/BlogsBox';
import List from '../components/list/List';
import AddCard from '../components/addCard/AddCard';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        
        children:[
            {
                path:'',
                element: <Content/>,
                children:[
                    {
                        path:'ddd',
                        element:<>
                        </>                    
                    }]
            }]
    }]);
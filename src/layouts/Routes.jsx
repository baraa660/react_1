import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "../components/home/Home.jsx";
import AddBlogPage from "../components/addBlogPage/AddBlogPage.jsx";
import BlogPage from "../components/blogPage/BlogPage.jsx";
import EditPlogPage from "../components/editPlogPage/EditPlogPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        {
            path:"/",
            element:<Home/>,
            
        },
        {
            path:'blogs',
            element:<Home/>
        },
        {
            path:'addBlog',
            element:<AddBlogPage/>
        },
        {
            path:'blog/:id',
            element:<BlogPage/>
        },
        {
            path:'editBlog/:id',
            element:<EditPlogPage/>
        }
    ],
  },
]);

import React, { createContext, useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BlogsServices from '../services/Blogs.js';


const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [contentData, setContentData] = useState([]);
  const { t, i18n  } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      let data=[];
      if(i18n.dir()=="ltr"){
         data = await BlogsServices.fetchDataEn();
      }
      else {
         data = await BlogsServices.fetchDataAr();
      }
      setContentData(data);
    };

    fetchData();
  }, [i18n.dir()]);


  return (
    <DataContext.Provider value={{ contentData, setContentData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
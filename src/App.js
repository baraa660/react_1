import './App.css';
import { DataProvider } from './DataContext/DataContext';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import { BrowserRouter, Router, RouterProvider } from 'react-router-dom';
import { router } from './layouts/Routes';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      
        <Header />
        <Content/>
        <Footer />
      
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

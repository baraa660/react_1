import './App.css';
import { DataProvider } from './DataContext/DataContext';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

function App() {
  return (
    <DataProvider>
      <Header/>
      <Content/>
      <Footer/>
    </DataProvider>
  );
}

export default App;

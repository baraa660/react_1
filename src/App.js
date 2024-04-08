import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import AddCard from './components/addCard/AddCard';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import FAQList from './components/FAQ/FAQList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <FAQList/>
      <Footer/>
    </div>
  );
}

export default App;

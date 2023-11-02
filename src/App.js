import './App.css';

// components
import HeroBanner from './components/HeroBanner';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import EmailForm from './components/EmailForm';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <HeroBanner />
      </header>
      <Content />
      <EmailForm />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Home from './pages/Home';
import { Header } from './components/header';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

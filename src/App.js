import './App.css';
import Home from './pages/Home';
import { CartProvider } from './contexts';
import { Header } from './components/header';
import { Footer } from './components/footer';

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Home />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;

import './App.css';
import { Home } from './pages/home';
import { CartProvider, ProductProvider } from './contexts';
import { Header } from './components/header';
import { Footer } from './components/footer';

function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <Header />
          <Home />
        </CartProvider>
      </ProductProvider>
      <Footer />
    </>
  );
}

export default App;

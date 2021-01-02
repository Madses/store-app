import './App.scss';
import { Home } from './pages/home';
import { CartProvider, ProductProvider } from './contexts';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <>
      <ToastProvider>
        <ProductProvider>
          <CartProvider>
            <Header />
            <Home />
          </CartProvider>
        </ProductProvider>
        <Footer />
      </ToastProvider>
    </>
  );
}

export default App;

import { useState } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import WhatsAppButton from './components/WhatsAppButton'; // Importa el nuevo componente
import './index.css';

function App() {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    return (
        <div className="app-container">
            <Header
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
            />
            <ProductList
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
            />
            <WhatsAppButton /> {/* Agrega el botón de WhatsApp aquí */}
        </div>
    );
}

export default App;

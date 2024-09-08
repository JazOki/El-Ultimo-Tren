import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import WhatsAppButton from './components/WhatsAppButton';
import CategorySelector from './components/CategorySelector'; // Importa el selector de categoría
import { data as initialData } from './data';
import './index.css';

function App() {
    const [allProducts, setAllProducts] = useState([]);
    const [countProducts, setCountProducts] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    useEffect(() => {
        setAllProducts(initialData);
        setCountProducts(initialData.length);
    }, []);

    return (
        <div className="app-container">
            <Header
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
            />
            {/* El selector de categoría debería aparecer aquí */}
            <CategorySelector 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
            />
            <ProductList
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
                selectedCategory={selectedCategory} 
            />
            <WhatsAppButton />
        </div>
    );
}

export default App;

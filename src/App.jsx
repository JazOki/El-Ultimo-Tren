// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { data } from './data'; 

const App = () => {
    const [category, setCategory] = useState('Todos');

    // Filtrar los productos según la categoría seleccionada
    const filteredProducts = category === 'Todos' ? data : data.filter((product) => product.category === category);

    return (
        <div>
            <Header setCategory={setCategory} />
            <ProductList
                allProducts={filteredProducts}
                selectedCategory={category}
            />
        </div>
    );
};

export default App;

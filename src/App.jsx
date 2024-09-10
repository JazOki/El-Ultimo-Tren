// App.jsx
import { useState } from 'react';
import Header from '../src/components/Header'; // Asegúrate de tener el archivo Header.jsx importado correctamente
import { data } from './data.js'; // Importa tu archivo de datos

const App = () => {
    const [category, setCategory] = useState('Todos'); // Estado para la categoría seleccionada

    // Filtrar productos por categoría seleccionada
    const filteredProducts = category === 'Todos' ? data : data.filter(product => product.category === category);

    return (
        <div>
            <Header setCategory={setCategory} /> {/* Pasa la función setCategory al Header */}
            
            <div className="container-items">
                {filteredProducts.map(product => (
                    <div key={product.id} className="item">
                        <img src={product.img} alt={product.nameProduct} className="product-image" />
                        <div className="product-name">{product.nameProduct}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;

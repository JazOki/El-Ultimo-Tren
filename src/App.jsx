// App.jsx
import { useState } from 'react';
import Header from './components/Header';
import { data } from './data'; // Importa tu data de productos

function App() {
    const [category, setCategory] = useState(''); // Estado para la categoría seleccionada

    // Filtra los productos en función de la categoría seleccionada
    const filteredProducts = category
        ? data.filter((product) => product.category === category)
        : data; // Si no hay categoría seleccionada, muestra todos los productos

    return (
        <div className="app-container">
            <Header setCategory={setCategory} /> {/* Pasa la función para actualizar la categoría */}
            <div className="container-items">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="item">
                        <div className="product-image">
                            <img src={product.img} alt={product.nameProduct} />
                        </div>
                        <h3 className="product-name">{product.nameProduct}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;

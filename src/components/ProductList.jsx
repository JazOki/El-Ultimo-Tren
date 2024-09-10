import React from 'react';

const ProductList = ({ allProducts, selectedCategory }) => {
    // Filtrar los productos según la categoría seleccionada
    const filteredProducts = selectedCategory === 'Todos'
        ? allProducts
        : allProducts.filter(product => product.category === selectedCategory);

    return (
        <div className="container-items">
            {filteredProducts.map((product) => (
                <div key={product.id} className="item">
                    <div className="product-image">
                        <img src={product.img} alt={product.nameProduct} />
                    </div>
                    <div className="info-product">
                        <span className="product-name">{product.nameProduct}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList; // Exportación por defecto

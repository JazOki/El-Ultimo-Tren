// components/ProductList.js
import React from 'react';

export const ProductList = ({ allProducts, setAllProducts, countProducts, setCountProducts, selectedCategory }) => {
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

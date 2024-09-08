// components/CategorySelector.js
import React from 'react';

const CategorySelector = ({ selectedCategory, setSelectedCategory }) => {
    const categories = ['Todos', 'Licores', 'Cervezas', 'Bebidas', 'Botanas', 'Extras'];

    return (
        <div className="nav-menu">
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-select"
            >
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategorySelector;
// Header.jsx
import { useState } from 'react';

const Header = ({ setCategory }) => {
    const [active, setActive] = useState(false);

    const handleCategoryClick = (category) => {
        setCategory(category); // Actualiza la categoría seleccionada
        setActive(false); // Cierra el menú después de seleccionar una categoría
    };

    return (
        <header className="header">
            <div className="logo-container">
                <img src='/imagenes/logo_transparent.png' alt="Logo" className="logo" />
            </div>

            <div className='container-icon'>
                <button className="menu-button" onClick={() => setActive(!active)}>
                    ☰
                </button>

                {/* Menú desplegable */}
                {active && (
                    <nav className="nav-menu">
                        <ul>
                            <li><a href="#licores" onClick={() => handleCategoryClick('Licores')}>Licores</a></li>
                            <li><a href="#bebidas" onClick={() => handleCategoryClick('Bebidas')}>Bebidas</a></li>
                            <li><a href="#botanas" onClick={() => handleCategoryClick('Botanas')}>Botanas</a></li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;

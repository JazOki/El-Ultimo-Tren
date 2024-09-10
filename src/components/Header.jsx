import { useState } from 'react';

const Header = ({ setCategory }) => {
	const [active, setActive] = useState(false);

	const handleCategoryClick = (category) => {
		setCategory(category);
		setActive(false); // Cierra el menú después de seleccionar una categoría
	};

	const toggleMenu = () => {
		setActive(!active); // Cambia el estado de "active"
	};

	return (
		<header className="header">
			<div className="logo-container">
				<img src='/imagenes/logo_transparent.png' alt="Logo" className="logo" />
			</div>

			<div className='container-icon'>
				{/* Botón de menú de hamburguesa o "X" con clase dinámica */}
				<button 
					className={`menu-button ${active ? 'menu-button-active' : ''}`} 
					onClick={toggleMenu}
					style={{ color: active ? 'white' : 'black' }} // Asegura el color dependiendo del estado
				>
					{active ? '✕' : '☰'}
				</button>
			</div>

			{/* Menú desplegable */}
			{active && (
				<nav className="nav-menu">
					<ul>
						<li><a href="#todo" onClick={() => handleCategoryClick('Todos')}>Todos</a></li>
						<li><a href="#licores" onClick={() => handleCategoryClick('Licores')}>Licores</a></li>
						<li><a href="#cervezas" onClick={() => handleCategoryClick('Cervezas')}>Cervezas</a></li>
						<li><a href="#bebidas" onClick={() => handleCategoryClick('Bebidas')}>Bebidas</a></li>
						<li><a href="#botanas" onClick={() => handleCategoryClick('Botanas')}>Botanas</a></li>
						<li><a href="#extras" onClick={() => handleCategoryClick('Extras')}>Extras</a></li>
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Header;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa el componente de FontAwesome
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Importa el ícono específico de WhatsApp
import '../index.css';

const WhatsAppButton = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/3325890863', '_blank'); // Reemplaza con tu número de WhatsApp
    };

    return (
        <button className="whatsapp-button" onClick={handleWhatsAppClick}>
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" /> {/* Usar el ícono de WhatsApp */}
        </button>
    );
};

export default WhatsAppButton;

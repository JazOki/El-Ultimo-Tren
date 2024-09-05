import React from 'react';
import '../index.css';

const WhatsAppButton = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/3325890863', '_blank'); // Reemplaza 1234567890 con tu número de WhatsApp
    };

    return (
        <button className="whatsapp-button" onClick={handleWhatsAppClick}>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                className="whatsapp-icon" 
            />
        </button>
    );
};

export default WhatsAppButton;

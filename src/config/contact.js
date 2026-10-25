// Configuration for contact channels
export const CONTACT_CONFIG = {
  // Replace with your real Dominican WhatsApp phone number (format: 1809XXXXXXX, 1829XXXXXXX, 1849XXXXXXX)
  whatsappPhone: import.meta.env.VITE_WHATSAPP_PHONE || '18293529944',
  
  // Default WhatsApp message
  defaultMessage: 'Hola Synapcraft, quiero una página web para mi negocio en República Dominicana.',
  
  // Instagram URL
  instagramUrl: 'https://instagram.com/synapcraft',
  instagramHandle: '@synapcraft',
  
  // CEO Instagram
  ceoInstagramUrl: 'https://instagram.com/srdevelop',
  ceoInstagramHandle: '@srdevelop',
  
  // Flagship Product
  dentalgridUrl: 'https://dentalgridse.com',
};

export const getWhatsAppUrl = (customText) => {
  const text = customText || CONTACT_CONFIG.defaultMessage;
  return `https://wa.me/${CONTACT_CONFIG.whatsappPhone}?text=${encodeURIComponent(text)}`;
};

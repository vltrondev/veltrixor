// Configuration for contact channels
export const CONTACT_CONFIG = {
  // WhatsApp phone number
  whatsappPhone: import.meta.env.VITE_WHATSAPP_PHONE || '18099447786',
  phoneFormatted: '+1 (809) 944-7786',
  
  // Official Contact Email
  email: 'synapcraft@hotmail.com',
  
  // Default WhatsApp message
  defaultMessage: 'Hola Synapcraft, quiero consultar sobre desarrollo de software o páginas web para mi empresa.',
  
  // Instagram URL
  instagramUrl: 'https://instagram.com/synapcraft',
  instagramHandle: '@synapcraft',
  
  // Founder Instagram
  ceoInstagramUrl: 'https://instagram.com/srdevelop',
  ceoInstagramHandle: '@srdevelop',
  
  // Flagship Product
  dentalgridUrl: 'https://dentalgridse.com',
};

export const getWhatsAppUrl = (customText) => {
  const text = customText || CONTACT_CONFIG.defaultMessage;
  return `https://wa.me/${CONTACT_CONFIG.whatsappPhone}?text=${encodeURIComponent(text)}`;
};

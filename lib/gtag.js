export const GA_TRACKING_ID = 'G-6S1YQQ7T28'; // Remplacez par votre ID de mesure

// Enregistre une page vue
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Enregistre un événement
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

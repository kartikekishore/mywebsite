// // src/hooks/useThemeFavicon.js

// import { useEffect } from 'react';

// export function useThemeFavicon(theme) {
//   useEffect(() => {
//     // Select the link element by its id
//     const favicon = document.getElementById('favicon');
    
//     if (favicon) {
//       // Update the href based on the current theme
//       if (theme === 'dark') {
//         favicon.href = '/favicon-dark.png';
//       } else {
//         favicon.href = '/favicon-light.png';
//       }
//     }
//   }, [theme]); // This effect runs every time the theme changes
// }
'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export function useThemeFavicon() {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    // Determine the actual theme (accounting for system theme)
    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    // Find existing favicon link or create one
    let favicon = document.querySelector<HTMLLinkElement>("link[rel*='icon']");
    
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/svg+xml';
      document.head.appendChild(favicon);
    }
    
    // Get the base path from Next.js config
    const basePath = process.env.NODE_ENV === 'production' ? '/mywebsite' : '';
    
    // Update the href based on the current theme
    if (currentTheme === 'dark') {
      favicon.href = `${basePath}/favicon-dark.svg`;
    } else {
      favicon.href = `${basePath}/favicon-light.svg`;
    }
  }, [theme, systemTheme]);
}
import { useCallback } from 'react';

/**
 * Custom hook for smooth scrolling using native browser API.
 * This ensures compatibility and leverages native optimizations.
 */
export const useSmoothScroll = () => {
  const scrollToId = useCallback((e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => {
    // 1. Immediately prevent default browser navigation
    e.preventDefault();

    // 2. Handle "Inicio" or top scroll if id is just '#' or '#inicio'
    if (id === '#' || id === '#inicio') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        history.pushState(null, '', '/');
        return;
    }

    // 3. Find target element
    const element = document.getElementById(id.replace('#', ''));
    if (!element) return;

    // 4. Use native scrollIntoView
    // The scroll-padding-top in CSS (globals.css) handles the offset for fixed headers
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    // 5. Update URL without causing a jump
    history.pushState(null, '', id);
  }, []);

  return { scrollToId };
};

import { useEffect } from 'react';

function useOutsideClick(ref: React.RefObject<HTMLElement>, handler: () => void) {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent): void => {
            // Use type assertion to check if the target is a Node and if it's inside the ref
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler();
            }
        };

        // Add event listeners
        document.addEventListener('mousedown', listener as EventListener);
        document.addEventListener('touchstart', listener as EventListener);

        return () => {
            // Remove event listeners
            document.removeEventListener('mousedown', listener as EventListener);
            document.removeEventListener('touchstart', listener as EventListener);
        };
    }, [ref, handler]); // Only re-run if ref or handler changes
}

export default useOutsideClick;

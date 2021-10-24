import { useEffect } from 'react';
function useClickAwayListener(element, onClickAway, exclude = []) {
    useEffect(() => {
        if (!element)
            return;
        const listener = (event) => {
            if (!(event.target instanceof Node)) {
                return;
            }
            const node = event.target;
            if ((element && element.contains(node)) ||
                exclude.some((item) => item instanceof Element && item.contains(node))) {
                return;
            }
            onClickAway && onClickAway(event);
        };
        document.addEventListener('mouseup', listener);
        return () => {
            document.removeEventListener('mouseup', listener);
        };
    }, [element, onClickAway, ...exclude]);
}
export default useClickAwayListener;

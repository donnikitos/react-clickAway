import { useEffect } from 'react';
import { IElement } from './interfaces';

function useClickAwayListener(
	element: IElement,
	onClickAway: (event: MouseEvent) => void,
	exclude: IElement[] = [],
) {
	useEffect(() => {
		if (!element) return;

		const listener = (event: MouseEvent) => {
			if (!(event.target instanceof Node)) {
				return;
			}
			const node = event.target;

			if (
				(element && element.contains(node)) ||
				exclude.some(
					(item) => item instanceof Element && item.contains(node),
				)
			) {
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

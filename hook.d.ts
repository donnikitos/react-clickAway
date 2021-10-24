import { IElement } from './interfaces';
declare function useClickAwayListener(element: IElement, onClickAway: (event: MouseEvent) => void, exclude?: IElement[]): void;
export default useClickAwayListener;

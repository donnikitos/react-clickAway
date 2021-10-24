# React Click Away Utilities

![npm](https://img.shields.io/npm/dt/@donnikitos/react-clickaway?style=for-the-badge)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@donnikitos/react-clickaway?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/donnikitos/react-clickAway?style=for-the-badge)
</br>
</br>

![TypeScript](https://img.shields.io/badge/typescript-^_4.4.0-blue?style=for-the-badge)

React.js utilities to listen for click away events.
Utilities contain a hook ~~and a high order click away component~~.

Install with [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/):

```bash
# via npm
npm install @donnikitos/react-clickaway

# via yarn
yarn add @donnikitos/react-clickaway
```

## Usage

The `useClickAwayListener` hook takes **2 to 3 arguments**, which register the click-away-listener.
The hook does not return any value, it just sits the in the code.

### Arguments

```typescript
function useClickAwayListener(
	observedElement: Element | null | undefined,
	callBack: (event: MouseEvent) => void,
	excludedElements?: (Element | null | undefined)[],
): void;
```

### Example

```typescript
import { useState } from 'react';
import { useClickAwayListener } from 'react-clickawaylistener';

// use in Component
function App(props) {
	const [reference, setReference] = useState<HTMLElement | null>(null);
	const [excluded, setExcluded] = useState<HTMLElement | null>(null);

	const cb = useCallback(() => {
		console.log('Event triggered!');
	}, []);

	useClickAwayListener(reference, cb, [excluded]);

	return (
		<>
			<div>I trigger the click-away-event</div>
			<div ref={setReference}>I do not trigger the event</div>
			<div>I trigger it too</div>
			<div ref={excluded}>I am not</div>
		</>
	);
}
```

## License

[MIT](LICENSE) Copyright (c) 2021 Nikita 'donnikitos' Nitichevski.

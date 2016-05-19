# redux-modals

`redux-modals` is a very simple package for handling modal state in your redux applications. It only provides a reducer and a couple of actions for setting and unsetting your modals.

The only thing this package assumes is that your modals are driven by your application state. Nothing fancy is done here and it does not actually show or hide your modals, it simply stores and provides a list of enabled modals.

## Installation

Clone this repo and run

```bash
$ npm run build
```

Then you can install the package locally by running

```bash
$ npm install <path to redux-modals>
```

### Test

To test the build library, run

```bash
$ npm run test
```

### Development

To generate an unminified version of the library, run

```bash
npm run dev
```

## Getting started

### 1. Register the reducer with your store

All you have to do to get up and running with `redux-modals` is register the router with your store.

```javascript
import { createStore, applyMiddleware } from 'redux';
import { modalsReducer } from 'redux-modals';

export default function configureStore(initialState) {
    return createStore(modalsReducer, initialState)
}
```


### 2. Hook your code up to use your modal state

You can find your active modals represented as a list in `<yourStoreState>.modals.active`. If using React, you would pass in `active` as props to your component.

```javascript
const isActive = (modalName) => this.props.modals.active.indexOf(modalName) !== -1;
// ...
<Modal show={isActive("someModal")} />
```

### 3. Utilize the exposed action creators

To set a modal as active, simply dispatch the return value of `setActive`, and to set a modal as inactive, dispatch the return value of `setInactive`.

```javascript
import { setActive, setInactive } from 'redux-modals';
...
store.dispatch(setActive(modalName));
store.dispatch(setInactive(modalName));
```

This will add or remove the modal name passed in to your active modals located at `store.modalsReducer.active`.
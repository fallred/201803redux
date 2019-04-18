import React from 'react'
import ReactDOM from 'react-dom';
import store from './store';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import {Provider} from './react-redux';
ReactDOM.render(<Provider store={store}>
	<Counter1 />
	<Counter2/>
</Provider>,document.querySelector('#root'));
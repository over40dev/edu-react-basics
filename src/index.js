import React from 'react'; // goes in all React components... no worries, it is not duplicated
import {render} from 'react-dom'; // no difference to bundle to just bring in render from 'react-dom' because it's the only method we need
import App from './components/App';
import './css/style.css';

render(<App/>, document.getElementById('main'));

/*
- inline CSS as above (can also use CSS pre-process like SCSS or stylus) OR
- include in index.html link as per usual.
*/


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CarouselPage from './containers/CarouselPage';

ReactDOM.render(<CarouselPage />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import PageRouter from './PageRouter'

ReactDOM.render(<PageRouter />, document.getElementById('root'));
registerServiceWorker();

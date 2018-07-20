import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css'; // The order is important import First
import registerServiceWorker from './registerServiceWorker';
import { AppRouter } from './router'; // Import last

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import './index.css';
// import registerServiceWorker from './registerServiceWorker';
// import { AppRouter } from './router';

// ReactDOM.render(
//   <AppRouter />,
//   document.getElementById('root') as HTMLElement
// );
// registerServiceWorker();
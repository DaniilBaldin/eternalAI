import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import '~/styles/index.css';
import { Provider } from 'react-redux';
import { store } from './store';
// import { ScrollToTop } from './utils/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Provider store={store}>
            {/* <ScrollToTop /> */}
            <App />
        </Provider>
    </BrowserRouter>,
);

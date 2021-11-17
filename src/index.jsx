import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './assets/letterosVue.css';
import './index.css'
import App from './App.jsx'
//import reportWebVitals from './reportWebVitals'
window.addEventListener('constructor:update', (event) => {
    console.log('Window handle constructor update: ', event);
    window.letter = JSON.stringify(event.detail);
});
(() => {
    const { letter, template } = window;
    const root = document.querySelector('#root');
    console.log('React loaded:', { letter, template, root });

    ReactDOM.render(
        <React.StrictMode>
            <App letter={letter} template={template} />
        </React.StrictMode>,
        root
    )
})();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals()

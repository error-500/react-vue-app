import DragObject from './components/DrugObject';
import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';

function App() {
    const vueApp = useRef(null);
    const dragbleData = {
        name: 'data object for drug',
        payload: (data, target) => {
            const callable = function () {
                console.log(`Druged payload ${data} on:`, this)
            };
            callable.bind(target);
        }
    };
    useEffect(() => {
        vueApp.current.addEventListener('dragover', (e) => {
            e.preventDefault();
            console.log('Vue start listening dragevent:', e);
        });
    }, [vueApp]);
    return (
        <section className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <DragObject zoneName={'Перетащи меня '} dragbleData={dragbleData} vueApp={vueApp}/>
            </header>
            <main ref={vueApp}>
                <div id="vue-app"></div>
            </main>
        </section>
    );
}

export default App;

import DragObject from './components/DrugObject';
import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useMemo } from 'react';
import letter from './assets/letter-17347.json';

function App() {
    const vueApp = useRef(null);
    console.log('App letteros load letter:', letter);
    const dragbleData = {
        name: 'data object for drug',
        payload: (data, target) => {
            const callable = function () {
                console.log(`Druged payload ${data} on:`, this);
            };
            callable.bind(target);
        }
    };
    const modules = useMemo(() => {
        return letter.modules.map(
            (module, idx) => {
                console.log('Module:', module);
                return (
                    <letteros-module key={`module-${idx}`} raw-code={module.rawCode.rawHtml}>
                        <div slot="module-menu">
                            <button>A</button>
                            <button>P</button>
                        </div>
                        <div slot="module-editor-tooltip">
                            <a href="#tooltip1">tooltip1</a>
                            <a href="#tooltip2">tooltip2</a>
                        </div>
                    </letteros-module>
                );
            }
        );
    }, []);

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
                <DragObject zoneName={'Перетащи меня '} dragbleData={dragbleData} vueApp={vueApp} ></DragObject>
            </header>
            <main style={{ minHeight: '30em' }}>
                {modules}
            </main>
            <article id="vue-app" ref={vueApp}></article>
        </section>
    );
}

export default App;

import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { ConstructorView } from './views/ConstructorView';


function App({ template, letter }) {
    const [areaData, setAreaData] = useState();
    const [areaRef, setAreaRef] = useState();

    const handleChangeTxtArea = useCallback((event) => {
        console.log('Text area change handler: ', { event, areaRef });
        const updateAreaEvent = new CustomEvent('constructor:update', {
            detail: event.target.value
        });
        window.dispatchEvent(updateAreaEvent)
    }, []);

    useEffect(() => {
        console.log('App mounted', { template, letter });
        if (letter) {
            setAreaData({ letter: JSON.parse(letter), template: JSON.parse(template) });
        }

    }, [letter, template]);
    useEffect(() => {
        return () => { console.log('Textarea changed:', { areaRef });}
    }, [areaRef])
    return (
        <ConstructorView template={areaData?.template} letter={areaData?.letter} rawRef={ setAreaRef } onUpdate={ handleChangeTxtArea }/>
    );
}
export default App;

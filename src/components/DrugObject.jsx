import React from 'react';

const DrugObject = (props) => {
    const { zoneName, dragbleData, vueApp } = props;
    const handleDrag = (e) => {
        e.dataTransfer.effectAllowed = 'copyLink';
        e.dataTransfer.dropEffect = 'link';
        e.dataTransfer.setData('text/plain', dragbleData.name);
        console.log('Drag object event:', e);
        const dragCustom = new CustomEvent('module:dragstart', { detail: dragbleData });
        vueApp.current.querySelector('#vue-app').dispatchEvent(dragCustom);
    };
    return (
        <div className="DrugObj" draggable="true"
            onDragStart={handleDrag}>

                {zoneName}

        </div>
    )
};
export default DrugObject;

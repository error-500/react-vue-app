import React,{ useMemo } from "react";
import { List } from 'semantic-ui-react';

export const Library = ({ template }) => {
    console.log('Libary call', { ...template });
    const list = useMemo(() => (template?.map((tpl, idx) => (
        <List.Item key={`group-${idx}`}>
            <List.Content>
                <List.Header>
                    {tpl.name} - ({tpl.items.length})
                </List.Header>
                <List.List>
                    {tpl.items.map((item, key) => (
                        <List.Item key={`module-${key}`}>
                            <div draggable="true" style={ {cursor: "copy"} }> {tpl.name} - {key}</div>
                        </List.Item>
                    ))}
                </List.List>
            </List.Content>
        </List.Item>
    ))), [template]);

    return (
        <List>
            { list }
        </List>
    )
}

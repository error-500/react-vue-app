import React, {useEffect, useMemo, useRef } from "react";
import { Library } from "../components/Library";
import { Container, Grid, Header, Button, Popup  } from "semantic-ui-react";
import '../assets/letteros-workarea';


export const ConstructorView = ({ template, letter, onUpdate, rawRef}) => {
    const workarea = useRef();
    const txtarea = useRef();

    const letterProps = useMemo(() => {
        return letter?.length ? JSON.stringify(letter) : '';
    }, [letter?.length]);

    const workAreaNode = useMemo(() => {
        return workarea?.current ?? null;
    }, [workarea?.current]);
    const renderAreaNode = useMemo(() => {
        return txtarea?.current ?? null
     }, [txtarea?.current])
/*
    const txtAreaNode = useMemo(() => {
        if (txtarea.current) {
            return txtarea.current;
        }
    }, [txtarea])

*/
    useEffect(() => {
        if (workarea?.current) {
            console.log('Constructor webcomponenet workarea ref:', { workarea, letter });
            if (letter) {
                workarea.current._wrapper.props.modules = letter;
            }
        }
    }, [workarea.current, letter?.length]);

    return (
        <Container style={{width: '100vw', height: '100vh'}} fluid>
            <Header as={`h1`} style={{textAlign:'center'}}>Тест LetterosWorkarea webcomponenet</Header>
            <Grid columns={3} divided style={{minHeight: '100%'}}>
                <Grid.Row >
                    <Grid.Column as={`nav`} style={ {width: '20%'}}>
                        <Library template={template} />
                    </Grid.Column>
                    <Grid.Column as={`section`} style={{maxWidth: '70%'}}>
                        <letteros-workarea ref={workarea} modules={letterProps} onUpdate={ onUpdate }>
                            <div slot="controls">
                                <Popup content={`Semantic UI popup`} trigger={<Button icon='add' />} />
                                <button class="ui icon button" onClick={(env) => {console.log('Slot button event', {env} )} }><i aria-hidden="true" class="add icon"></i></button>
                            </div>
                        </letteros-workarea>
                    </Grid.Column>
                    <Grid.Column as={`aside`} style={{width: '30%'}}>
                        <textarea style={{width: '100%', height: '100%'}}
                            ref={txtarea}
                            onChange={onUpdate}
                            value={ JSON.stringify(letter) }></textarea>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

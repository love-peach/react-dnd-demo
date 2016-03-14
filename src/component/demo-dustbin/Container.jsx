/**
 * Created by peach on 16-3-14.
 */
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Dustbin from './Dustbin';
import Box from './Box';

class Container extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Dustbin />
                </div>
                <div>
                    <Box name="box1"/>
                    <Box name="box2"/>
                    <Box name="box3"/>
                </div>

            </div>
        );
    }
}
export default DragDropContext(HTML5Backend)(Container);
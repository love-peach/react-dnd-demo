/**
 * Created by peach on 16-3-14.
 */
import React from 'react';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Demo1 from '../component/demo/Demo1.jsx';



class App extends React.Component {


    render() {
        return (
            <div>
               <Demo1 />
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(App);
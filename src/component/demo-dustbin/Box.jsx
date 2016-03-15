/**
 * Created by peach on 16-3-14.
 */
import React, { PropTypes, Component } from 'react';

import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes.jsx';

const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left'
};

const boxSpec = {
    beginDrag(props) {
        return {
            name: props.name,
            type: ItemTypes.BOX
        };
    },
    endDrag(props,monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();

        if (dropResult) {
            console.log( // eslint-disable-line no-alert
                `You dropped ${item.name} into ${dropResult.name}!`
            );
        }
    }
};

function boxCollect(connect,monitor) {
    return {
        isDragging: monitor.isDragging(),
        connectDragSource: connect.dragSource()
    }
}

class Box extends Component {
    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        isDragging: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
    };


    render() {

        const { isDragging, connectDragSource } = this.props;
        const { name } = this.props;
        const opacity = isDragging ? 0.4 : 1;


        return connectDragSource (
            <div style={{ ...style,opacity}}>
                {name}
            </div>
        );
    }
}
export default DragSource(ItemTypes.BOX,boxSpec,boxCollect)(Box);
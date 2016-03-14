/**
 * Created by peach on 16-3-14.
 */
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';


const types = 'card';

const spec = {
    beginDrag(props) {
        return {
            id: props.id,
            content: props.content
        }
    }

};

function collect(connect, monitor) {
    return {
        isDragging: monitor.isDragging(),
        connectDragSource: connect.dragSource()
    }
}

class MyComponent extends Component {
    render() {
        // 可以访问 collect 中返回的  object
        const { isDragging, connectDragSource } = this.props;
        // 需要用 connect.dragSource()/connect.dropTarget() 封装自己的组件
        return connectDragSource(
            <div>123</div>
        )
    }
}
export default DragSource(types,spec,collect)(MyComponent);
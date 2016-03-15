/**
 * Created by peach on 16-3-14.
 */
import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes.jsx';


const style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left'
};

const tustbinSpec = {
    drop(props, monitor, component) {
        const item = monitor.getItem();
        console.log(item.id);
        return { name: 'Dustbin' };
    }
};

function dustbinCollect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}


class Dustbin extends Component {

    static propTypes = {
        connectDropTarget: PropTypes.func.isRequired,
        isOver: PropTypes.bool.isRequired,
        canDrop: PropTypes.bool.isRequired
    };
    render() {
        const { canDrop, isOver, connectDropTarget } = this.props;
        const isActive = canDrop && isOver;

        let backgroundColor = '#222';
        if (isActive) {
            backgroundColor = 'darkgreen';
        } else if (canDrop) {
            backgroundColor = 'darkkhaki';
        }
        return connectDropTarget(
            <div　style={{ ...style,backgroundColor}}>
                {isActive ?
                    'Release to drop' :
                    'Drag a box here'
                }
            </div>
        );
    }
}
export default DropTarget(ItemTypes.BOX,tustbinSpec,dustbinCollect)(Dustbin);
import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    state = {
        completed: this.props.todo.completed
    }

    // const { id, todo, completed } = this.props;
    render() {

        const { content } = this.props.todo ;
        const lineThrough = {
            textDecoration: "line-through"
        }
        return (
            <tr>
                <td className="listItem" style={ this.state.completed ? lineThrough : null} onClick={ () => this.setState({ completed: !this.state.completed })}> { content }</td>
            </tr>
        )
    }
}

export default TodoItem
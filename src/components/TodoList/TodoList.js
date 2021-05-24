import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css';

class TodoList extends Component {

    state = {
        todosCounter: 3,
        todos: [],
        throwErrorOnInput: false,
    }
    addTodo = (e) => {
        e.preventDefault();
        if (e.target[0].value === "")
        {
            this.setState({ throwErrorOnInput: true });
            setTimeout(async () => {
                await this.setState({ throwErrorOnInput: false });
            }, 2000);
            return;
        }
        console.log("event:", e);
        this.setState({

            todos: [ 
                ...this.state.todos, 
                {
                    id: 4,
                    content: e.target[0].value,
                    completed: false
                }
            ]
        });
        e.target[0].value = "";
    }
    
    render() {

        return (
            <React.Fragment>
                <form onSubmit={this.addTodo} className="makeCenter" id="inputForm">
                    <input placeholder="Add Todos..." type="text"/>
                    <button>Add Todo</button>
                    <span id="errMsg" hidden={!this.state.throwErrorOnInput}>Please enter something...</span>
                </form>
                <table className="makeCenter">
                    <tbody>
                        { this.state.todos.map( todo => (<TodoItem key={todo.id} todo={todo}/>))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}


export default TodoList;
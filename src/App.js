import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Todo List</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
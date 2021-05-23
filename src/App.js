import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
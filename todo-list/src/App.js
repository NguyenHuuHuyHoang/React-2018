import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import Login from './components/BT-FormLogin/Login';

function App() {
  return (
    <div className="App">
      <TodoItem title="Đi chợ" objectToDo={{name: "Đi ngủ"}}/>
      {/* <Login /> */}
    </div>
  );
}

export default App;

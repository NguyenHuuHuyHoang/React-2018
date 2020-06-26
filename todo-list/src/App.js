import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import Login from './components/BT-FormLogin/Login';
import ListIcon from './components/BT-Icon/ListIcon';
import Table from './components/BT-Table-map/Table';

function App() {

  let todoItem = [
      'Mua bim bim',
      'Đi đá bóng', 
      'Đi đổ xăng'
    ];


  return (
    <div className="App">
      
      {/* {
        todoItem.map((item,index)=> <TodoItem key={index} title={item}/>)
      } */}

      {/* <TodoItem title="Đi chợ" objectToDo={{name: "Đi ngủ"}}/> */}
      {/* <Login /> */}
      {/* <ListIcon /> */}
      {/* <Table /> */}
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Login from "./components/BT-FormLogin/Login";
import ListIcon from "./components/BT-Icon/ListIcon";
import Table from "./components/BT-Table-map/Table";
import TableGallery from "./components/BT-Table gallery/TableGallery";

function App() {
  let todoItem = [
    { title: "Mua bim bim", isComplete:true },
    { title: "Đi đá bóng" },
    { title: "Đi đổ xăng" },
  ];

  return (
    <div className="App">
      {/* {
        todoItem.map((item,index)=> 
        <TodoItem key={index} item={item}/>)
      } */}

      {/* <TodoItem title="Đi chợ" objectToDo={{name: "Đi ngủ"}}/> */}
      {/* <Login /> */}
      {/* <ListIcon /> */}
      {/* <Table /> */}
      <TableGallery />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Login from "./components/BT-FormLogin/Login";
import ListIcon from "./components/BT-Icon/ListIcon";
import Table from "./components/BT-Table-map/Table";
import TableGallery from "./components/BT-Table gallery/TableGallery";
import List from "./components/BT-isRenderList/List";
import TrafficLight from "./components/TrafficLight/TrafficLight";
import FormInput from "./components/BT-FormInput/FormInput";
import BT1Button from "./components/BT-HandingEvents/BT1Button";
import BT2StepNumber from "./components/BT-HandingEvents/BT2StepNumber";

function App() {
  let todoItem = [
    { title: "Mua bim bim", isComplete: true },
    { title: "Đi đá bóng" },
    { title: "Đi đổ xăng" },
  ];

  return (
    <div className="App">
      {/* {
        todoItem.map((item,index)=> 
        <TodoItem key={index} item={item}/>)
      } */}
      <BT2StepNumber/>
      {/* <BT1Button /> */}
      {/* <TodoItem title="Đi chợ" objectToDo={{name: "Đi ngủ"}}/> */}
      {/* <Login /> */}
      {/* <ListIcon /> */}
      {/* <Table /> */}
      {/* <TableGallery /> */}
      {/* <List /> */}
      {/* <TrafficLight /> */}
      {/* <FormInput /> */}
    </div>
  );
}

export default App;

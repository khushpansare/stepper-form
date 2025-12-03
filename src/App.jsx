import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Stepper_Form_wrapper from "./Stepper-Form/Stepper_Form_wrapper";
import Main from "./Pagination/Main";
import ToDoList from "./To-Do-List/Main";
import Navbar from "./component/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter basename="/stepper-form">
        {/* <Navbar /> */}
        <Routes>
          {/* Stepper Form */}
          <Route path="/" element={<Stepper_Form_wrapper />} />

          {/* Pagination */}
          {/* <Route path="/pagination" element={<Main />} /> */}

          {/* ToDo app */}
          <Route path="/todo-app" element={<ToDoList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

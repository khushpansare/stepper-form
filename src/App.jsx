import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Stepper_Form_wrapper from "./Stepper-Form/Stepper_Form_wrapper";
import Main from "./Pagination/Main";
import ToDoList from "./To-Do-List/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter basename="/stepper-form">
        <Routes>
          {/* Stepper Form */}
          <Route path="/" element={<Stepper_Form_wrapper />} />

          {/* Pagination */}
          {/* <Main /> */}

          {/* <ToDoList /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

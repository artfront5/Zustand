import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoFromApi from "./components/TodoFromApi";

function App() {
    return (
        <div className="App">
            <TodoFromApi />
            <Todo />
        </div>
    );
}

export default App;

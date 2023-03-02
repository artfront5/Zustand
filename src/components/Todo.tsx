import React from "react";
import { useTodoStore } from "../store";
import "../App.css";

export default function Todo() {
    const { newTodo, setNewTodo, todos, addTodo, removeTodo } = useTodoStore();
    return (
        <>
            <form className="mx-auto box">
                <div className=" input-group m-3 ">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Введите задачу"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => addTodo()}
                    >
                        Ввести
                    </button>
                </div>

                <div>
                    {todos.map((todo) => (
                        <div className="box__items">
                            <div key={todo.id}>{todo.title} </div>{" "}
                            <button
                                type="button"
                                className="btn btn-outline-danger "
                                onClick={() => removeTodo(todo.id)}
                            >
                                Удалить задачу
                            </button>
                        </div>
                    ))}
                </div>
            </form>
        </>
    );
}

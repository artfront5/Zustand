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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-arrow-big-down-line-filled"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            ></path>
                            <path
                                d="M9 5l-.117 .007a1 1 0 0 0 -.883 .993v4.999l-2.586 .001a2 2 0 0 0 -1.414 3.414l6.586 6.586a2 2 0 0 0 2.828 0l6.586 -6.586a2 2 0 0 0 .434 -2.18l-.068 -.145a2 2 0 0 0 -1.78 -1.089l-2.586 -.001v-4.999a1 1 0 0 0 -1 -1h-6z"
                                stroke-width="0"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M15 2a1 1 0 0 1 .117 1.993l-.117 .007h-6a1 1 0 0 1 -.117 -1.993l.117 -.007h6z"
                                stroke-width="0"
                                fill="currentColor"
                            ></path>
                        </svg>
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-trash"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <path d="M4 7l16 0"></path>
                                    <path d="M10 11l0 6"></path>
                                    <path d="M14 11l0 6"></path>
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </form>
        </>
    );
}

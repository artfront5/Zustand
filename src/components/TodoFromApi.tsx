import { useTodoStore } from "../store";

function TodoFromApi() {
    const load = useTodoStore((state) => state.load);
    return (
        <div className="App">
            <button className="btn btn-outline-success m-3" onClick={load}>
                Загрузить список дел
            </button>
            <div>{}</div>
        </div>
    );
}

export default TodoFromApi;

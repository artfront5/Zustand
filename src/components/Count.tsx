import { useCount } from "../store";
function Count() {
    const { count, increment, decrement, reset } = useCount();
    return (
        <div className="App">
            Вы сделали {count} кликов
            <button className="btn btn-outline-success m-3" onClick={increment}>
                +
            </button>
            <button className="btn btn-outline-success m-3" onClick={decrement}>
                -
            </button>
            <button className="btn btn-outline-success m-3" onClick={reset}>
                reset
            </button>
        </div>
    );
}

export default Count;

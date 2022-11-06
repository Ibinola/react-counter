import React from "react";
import { useState } from "react";
import UseCounter from "./UseCounter";

const CounterUseState = () => {
    const { count, increment, decrement, reset, setCountTo } = UseCounter(0);

    const [input, setInput] = useState();

    function handleInput(e) {
        const value = Number(e.target.value);
        setInput(value);
    };

    return (
        <div className="container">
            <h2>Custom Hook</h2>
            <h3>{count}</h3>

            <div className="counter-btn">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>

            <div className="count-reset">
                <input type="number"
                    value={input}
                    onChange={(e) => handleInput(e)}
                />

                <button onClick={reset}>Reset</button>


            </div>

            <button onClick={() => setCountTo(input)}>
                Set Count
            </button>
        </div>
    );
}

export default CounterUseState;
import React, { useState, useReducer } from 'react'


const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count !== 0 ? state.count - 1 : (state.count = 0) };
        case 'reset':
            return initialState;
        case 'setCountTo':
            return { count: action.payload };
        default:
            throw new Error('Error occured in counter');
    }
};


const CounterUseReducer = () => {

    const [input, setInput] = useState();

    function handleInput(e) {
        setInput(Number(e.target.value));
    }


    const [state, dispatch] = useReducer(reducer, initialState);


    const increment = () => {
        dispatch({ type: 'increment' });
    };

    const decrement = () => {
        dispatch({ type: 'decrement' });
    };

    const reset = () => {
        dispatch({ type: 'reset' });
    };

    const setCountTo = (value) => {
        dispatch({ type: 'setCountTo', payload: value });
    };

    return (
        <div className='container'>
            <h2>Use Reducer</h2>
            <h3>{state.count}</h3>

            <div className="counter-btn">
                <button className="increment-btn" onClick={increment}>Increment</button>
                <button className="decrement-btn" onClick={decrement}>Decrement</button>
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
};


export default CounterUseReducer;
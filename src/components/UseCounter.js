import { useState } from "react";

function UseCounter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const reset = () => {
        setCount(0);
    };

    const setCountTo = (value) => {
        if (value === undefined) return;
        setCount(value);
    };

    return { count, increment, decrement, reset, setCountTo };
}

export default UseCounter;
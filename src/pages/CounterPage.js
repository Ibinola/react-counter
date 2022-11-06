import React from "react";
import { Link, Outlet } from "react-router-dom";

const CounterPage = () => {
    return (
        <div>
            <h1 className="App">Counter Page</h1>
            <div className="nav-bar">
                <li><Link className="link" to="/counter/custom-hook">Custom Hook</Link></li>
                <li><Link className="link" to="/counter/reducer">useReducer</Link></li>
            </div>
            <Outlet />
        </div >
    );
}

export default CounterPage
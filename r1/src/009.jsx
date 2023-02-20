import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { useState } from "react";
import { randColor } from "./Functions/randColor";
import { v4 as uuidv4 } from "uuid";

export function App() {
    // const [sqColor, setSqColor] = useState('crimson');
    // const [count, setCount] = useState(0);

    // //random color generator
    // const changeColor = () => {
    //     const symbols = '0123456789ABCDEF';
    //     let color = '#';
    //     for (let i = 0; i < 6; i++) {
    //         color += symbols[Math.floor(Math.random() * 16)];
    //     }
    //     setSqColor(color);
    // };

    // const addOne = () => {
    //     //setCount(count++); //you can't do this

    //     /* setCount(count + 1);
    //     setCount(count + 1);
    //     can't do this either, because it edits the state twice in one render cycle */

    //     setCount((c) => c + 1);
    //     setCount((c) => c + 1);
    //     //this is the correct way to do it
    //};

    const [square, setSquare] = useState([]);

    const addSquare = () => {
        setSquare((s) => [...s, { color: randColor(), id: uuidv4() }]);
    };

    const deleteSquare = (id) => {
        setSquare((s) => s.filter((sq) => sq.id !== id));
    };

    const cloneSquare = (id) => {
        const clone = square.find((sq) => sq.id === id);
        setSquare((s) => [...s, { ...clone, id: uuidv4() }]);
    };

    return (
        <div className="App">
            <header className="App-header">
                {/* <div className="sq-bin">
                    <div className="sq" style={{ backgroundColor: sqColor }}></div>
                    <div className="sq">{count}</div>
                </div>
                <button className="blue" onClick={changeColor}>
                    Change
                </button>
                <button className="crimson" onClick={addOne}>
                    Add 1
                </button> */}
                <div className="sq-bin">
                    {/* {square.map((s, index) => (
                        <Square key={index} sqColor={s} sqIndex={index} />
                    ))} */}

                    {square.map((s, index) => (
                        <div
                            key={index}
                            className="sq spin"
                            style={{ backgroundColor: s.color }}
                        >
                            <button
                                className="crimson small"
                                onClick={() => deleteSquare(s.id)}
                            >
                                DEL
                            </button>
                            <button
                                className="blue small"
                                onClick={() => cloneSquare(s.id)}
                            >
                                CLONE
                            </button>
                        </div>
                    ))}
                </div>

                <button className="crimson" onClick={addSquare}>
                    + []
                </button>
            </header>
        </div>
    );
}

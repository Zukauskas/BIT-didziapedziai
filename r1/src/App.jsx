import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { useState } from 'react';

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
            </header>
        </div>
    );
}

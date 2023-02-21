/* 

Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu.


*/

import { useState } from "react";
import styles from "./CircleSquare.module.css";

const CircleSquare = () => {
    const [shape, setShape] = useState("circle");

    const changeShape = () => {
        if (shape === "circle") {
            setShape("square");
        } else {
            setShape("circle");
        }
    };

    return (
        <div>
            <div className={styles[shape]}></div>
            <button onClick={changeShape}>Change</button>
        </div>
    );
};

export default CircleSquare;
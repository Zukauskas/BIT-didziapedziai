import { rand } from '../../Functions/rand.js';
import { ShowName } from './ShowName.jsx';

const fontFamily = 'monospace';

export function Animal({ animalName, color, h1Class }) {
    return (
        <h1
            className={h1Class}
            style={{
                color,
                padding: '10px 30px',
                fontSize: rand(10, 25) + 'px',
                letterSpacing: rand(0, 1) ? '5px' : null,
                fontFamily,
            }}
        >
            *<ShowName animalName={animalName} fontFamily={fontFamily} />* number: {rand(0, 100)}
        </h1>
    );
}

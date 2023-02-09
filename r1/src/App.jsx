import './App.scss';
import { Animal } from './Components/jb/Animal.jsx';

const obj = ['racoon', 'fox', 'wolf', 'rabbit'];

export function App() {
    // const fox = <u>FOX number: {rand(100, 199)}</u>;

    // const labas = <i>Labas</i>;

    return (
        <div className="App">
            <header className="App-header">
                <h2>{obj}</h2>

                <Animal animalName="Racoon" color="coral" h1Class="blue" />
                <Animal animalName="Fox" color="red" h1Class="green" />
                <Animal animalName="Wolf" color="blue" h1Class="red" />
                <Animal animalName="Rabbit" color="black" h1Class="yellow" />
            </header>
        </div>
    );
}

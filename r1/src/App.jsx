import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Click } from './Components/008/Clicked';

// const data = [
//     { id: 1, animal: 'Racoon', color: 'crimson', bold: true },
//     { id: 4, animal: 'Fox', color: 'brown', bold: true },
//     { id: 17, animal: 'Beaver', color: 'skyblue', bold: true },
//     { id: 3, animal: 'Unicorn', color: 'coral', bold: false },
// ];

export function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Click />
            </header>
        </div>
    );
}

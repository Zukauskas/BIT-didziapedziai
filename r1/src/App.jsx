import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { useState } from 'react';

function App() {
    const [wish, setWish] = useState('');
    const [wishList, setWishList] = useState([]);

    const wishHandler = e => {
        setWish(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();
        setWishList([...wishList, wish]);
        setWish('');
    };

    return (
        <div className='App'>
            <header className='App-header'>
                <h1>Wish Bin</h1>
                <form onSubmit={submitHandler}>
                    <div className='input-bin'>
                        <label>Enter Your Wish</label>
                        <input type='text' onChange={wishHandler} value={wish} />
                        <button type='submit'>Submit</button>
                    </div>
                </form>
                <h2>Wish List</h2>
                <ul className='wish-list'>
                    {wishList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </header>
        </div>
    );
}

export default App;

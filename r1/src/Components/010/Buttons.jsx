function Buttons({ setCount}) {
    return (
        <>
            <button className="blue" onClick={() => setCount(count => count * 2)}>
                x2
            </button>
            <button className="crimson" onClick={() => setCount(1)}>
                reset
            </button>
        </>
    );
}

export default Buttons;

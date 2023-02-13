export function Click() {
    const buttonClicked = (color) => {
        return () => console.log(`You clicked the ${color} button!`);
    };

    const buttonClicked2 = (color) => {
        console.log(`You clicked the ${color} button! V2`);
    };

    const go = () => {
        console.log('Go RED!');
    };

    const goEvent = (e) => {
        console.log(e);
        console.log('Go RED!');
    };

    return (
        <div>
            <button className="crimson" onClick={go}>
                #1
            </button>
            <button className="crimson" onClick={goEvent}>
                #2
            </button>

            <button className="blue" onClick={buttonClicked('blue')}>
                #3 Blue
            </button>
            <button className="coral" onClick={buttonClicked('coral')}>
                #3 Coral
            </button>

            <button className="blue" onClick={() => buttonClicked2('blue')}>
                #4 Blue
            </button>
            <button className="coral" onClick={() => buttonClicked2('coral')}>
                #4 Coral
            </button>

            <button className="crimson" onClick={() => console.log('In one line')}>
                #5
            </button>
        </div>
    );
}

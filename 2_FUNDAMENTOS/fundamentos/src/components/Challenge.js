const Challenge = () => {

    const a = 1
    const b = 10

    return (
        <div>
            <h3>A: {a}</h3>
            <h3>B: {b}</h3>
            <button onClick={() => console.log(a + b)}>SOMANDO A + B</button>
        </div>
    );
};

export default Challenge;
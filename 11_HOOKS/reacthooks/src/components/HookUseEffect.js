import { useEffect, useState } from 'react';

const HookUseEffect = () => {
    // 1 - useEffect sem dependências
    useEffect(() => {
        console.log("Estou sendo executado")
    });

    const [number, setNumber] = useState(1);

    const changeSomething = () => {
        setNumber(number + 1);
    };

    // 2 - array de dependências vazio
    useEffect(() => {
        console.log("Serei executado apenas uma vez!");
    }, []);

    // 3 - item no array de dependências
    const [anotherNumber, setAnotherNumber] = useState(0);
        if (anotherNumber > 0) {
            console.log("Sou executado apenas ao mudar o anotherNumber!");
        }
    useEffect(() => {
        
    }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Número: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>Outro número: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar outro número!
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;

import { useState } from 'react';

const HookUseState = () => {
    // 1 - useState
    let userName = "Kauã";

    const [name, setName] = useState("Sandro");

    const changeNames = () => {

        userName = "Kauã Luiz"

        setName("Sandro Câmara Damasceno")
    }
  
  
    return (
        <div>
            {/* 1 - useState */}
            <h2>useState</h2>
            <p>Variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar nomes!</button>
            <hr />
        </div>
    );
};

export default HookUseState;

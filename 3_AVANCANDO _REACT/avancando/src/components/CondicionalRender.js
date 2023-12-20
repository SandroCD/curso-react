import { useState} from 'react'

const CondicionalRender = () => {
  const [x] = useState (false);

  const [name, setName] = useState("Sandro");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p> }
      {!x && <p>Agora x é falso</p> }

      <h1>If Ternário</h1>
      {name === "José" ? (
        <div>
            <p>O nome é José</p>
        </div>
      ) : (
        <div>
            <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={() => setName("José")}>Clique aqui!</button>
    </div>
  );
};

export default CondicionalRender;

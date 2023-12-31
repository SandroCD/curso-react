// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// 4 - REFATORANDO COM HOOK
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - CONTEXT MAIS COMPLEXO
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
    // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5 - CONTEXT MAIS COMPLEXO
  const { color, dispatch } = useTitleColorContext();

  console.log(color);

  // 6 - ALTERANDO STATE COMPLEXO
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };
  
  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - ALTERANDO VALOR CONTEXTO */}
      <ChangeCounter />
      {/* 6 - ALTERANDO CONTEXTO COMPLEXO */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;

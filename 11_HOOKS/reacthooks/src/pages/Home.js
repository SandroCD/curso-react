import React from 'react';
import HookUseState from '../components/HookUseState';
import HookUseReducer from '../components/HookUseReducer';
import HookUseEffect from '../components/HookUseEffect';

// useContext
import { useContext } from 'react';
import { SomeContext } from '../components/HookUseContext';

const Home = () => {
  const { contextValue } = useContext(SomeContext);

    return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do Contexto: {contextValue}</p>
      <hr />
    </div>
  );
};

export default Home

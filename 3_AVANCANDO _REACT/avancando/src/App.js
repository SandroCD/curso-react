import { useState } from 'react';
import './App.css';

//IMAGENS
import Noite from "./assets/noite.png";

//COMPONENTES
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import CondicionalRender from './components/CondicionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  // const name = "Kauã Luiz";
  const [userName] = useState("Elisane");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    {id: 2, brand: "Chevrolet", color: "Prata", newCar: false, km: 18118 },
    {id: 3, brand: "Renault", color: "Branca", newCar: false, km: 782 }
  ];

  function showMessage() {
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const pessoas = [
    {id:1, nome: "Enzo", emprego:"Estudante pré universitário", idade: 15},
    {id:2, nome: "Levi", emprego:"Estudante universitário", idade: 18},
    {id:3, nome: "Kauã", emprego:"Estudante infantil", idade: 4}
  ];

  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/* Imagem em public */}
      <div>
        <img src="/tarde.png" alt="Lago Tarde" />
      </div>

      { /* Imagem em assets */}
      <div>
        <img src={Noite} alt="Montanha Noite" />
      </div>
      <ManageData />
      <ListRender />
      <CondicionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={100207} color="Azul" newCar={false} />
      { /* reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true} />
      <CarDetails brand="Fiat" km={4510} color="Preta" newCar={false} />
      {/* loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <p>Testando container</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />
      {/* DESAFIO */}
      {pessoas.map((pessoa) => (
        <UserDetails 
          key={pessoa.id}
          nome={pessoa.nome}
          emprego={pessoa.emprego}
          idade={pessoa.idade}
        />
      ))}
    </div>
  );
};

export default App;

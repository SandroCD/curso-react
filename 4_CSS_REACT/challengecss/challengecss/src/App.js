
import './App.css';
import Car from "./components/Car.js"

function App() {

  const myCars = [
    { name: "KA", brand: "Ford", color: "Prata", year: 2008 },
    { name: "500", brand: "Fiat", color: "Prata", year: 2012 },
    { name: "PUNTO", brand: "Fiat", color: "Vermelho", year: 2016 },
    { name: "ÔNIX", brand:"Chevrolet", color: "Branco", year: 2020 }
  ]

  return (
    <div className="App">
      <h1>Meus carros</h1>
      <div className='car-container'>
          {myCars.map(( car ) => (
            <Car car={car}/>
          ))}
      </div>
    </div>
  );
}

export default App;

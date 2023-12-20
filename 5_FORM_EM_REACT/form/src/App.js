
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ name: "Kauã", email: "kaualuizad@gmail.com", bio: "Filho do papai", role: "Administrador"}}/>
    </div>
  );
}

export default App;

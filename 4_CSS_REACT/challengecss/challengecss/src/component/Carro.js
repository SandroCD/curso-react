import styles from "./Carro.module.css"

const Carro = ({ carros }) => {
  return (
    <div className={styles.card}>
        <h1>{carros.nome}</h1>
        <p>Marca: {carros.marca}</p>
        <p>Cor: {carros.cor}</p>
        <p>Ano: {carros.ano}</p>   
    </div>
  );
};

export default Carro;

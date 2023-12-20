import styles from "./Car.module.css"

const Car = ({ car }) => {
  return (
    <div className={styles.card}>
      <h1>{car.name}</h1>
      <p>Marca: {car.brand}</p>
      <p>Cor: {car.color}</p>
      <p>Ano: {car.year}</p>
    </div>
  );
};

export default Car

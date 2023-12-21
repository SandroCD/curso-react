import { useParams } from "react-router-dom"; // Utilizado para trazer parâmetros, como o Id por exemplo

const Product = () => {
    // 4 - ROTA DINÂMICA
    const { id } = useParams();
  return (
    <>
      <p>ID do produto: { id }</p>
    </>
  );
};

export default Product;

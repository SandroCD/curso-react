import { useParams } from "react-router-dom"; // Utilizado para trazer parâmetros, como o Id por exemplo
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    // 4 - ROTA DINÂMICA
    const { id } = useParams();

    // 5 - CARREGAMENTO DE DADO INDIVIDUAL
    const url = "http://localhost:3000/products/" + id

    const { data: product, loading, error } = useFetch(url)

    console.log(product)
  return (
    <>
      <p>ID do produto: { id }</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
            <h1>{product.name}</h1>
            <p>R$ {product.price}</p>
        </div>
      )}
    </>
  );
};

export default Product;

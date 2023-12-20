
const UserDetails = ({ nome, idade, emprego }) => {
  return (
    <div>
        <h2> {nome} </h2>
        <p> Idade: {idade} </p>
        <p> Profissão: {emprego} </p>
        {idade >= 18 ? ( <p>Pode tirar a CNH</p> ) : ( <p>Menor de idade!</p> )}
    </div>
  );
};

export default UserDetails;
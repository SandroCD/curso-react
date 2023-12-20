// arquivos de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {
    // essa função faz isso

    /*
        multi line (comentários de múltiplas linhas)
    */

    return (
        <div>
            { /* algum comentário */ }
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent/>
        </div>
    );
};

export default FirstComponent;

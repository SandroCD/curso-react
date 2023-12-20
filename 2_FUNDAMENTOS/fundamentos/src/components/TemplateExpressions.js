const TemplateExpressions = () => {

    const name = "Sandro";
    const data = {
        age: 40,
        job: "Estudante Full Stack",
        son: "Kauã Luiz"
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Atualmente você é um {data.job}.</p>
        </div>
    );
};

export default TemplateExpressions;
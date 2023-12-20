import { useState, useEffect } from "react";

// 4 - CUSTOM HOOK
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - REFATORANDO POST
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // 6 - LOADING
    const [loading, setLoading] = useState(false);

    // 8 - TRATANDO ERROS
    const [error, setError] = useState(null)

    // 9 - DESAFIO 6 DELETE
    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method: "POST",
                Headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });

            setMethod(method);
        } else if (method === "DELETE") {
            setConfig({
                method: "DELETE",
                Headers: {
                    "Content-type": "application/json"
                },
            });

            setMethod("DELETE");
            setItemId(data);
        }
    };

    useEffect(() => {

        const fetchData = async () => {

            // 6 - LOADING
            setLoading(true);

            try {
                const res = await fetch(url);

                const json = await res.json();

            setData(json);
            } catch (error) {
              // console.log(error.message);

              setError("Houve algum erro ao carregar os dados!");
            }

            setLoading(false);
        };

        fetchData();
    }, [url, callFetch]);

    // 5.1 - REFATORANDO POST
    useEffect (() => {
        const httpRequest = async () => {

            let json

            if(method === "POST") {
                let fetchOptions = [url, config];
    
                const res = await fetch(...fetchOptions);
    
                json = await res.json();

            } else if( method === "DELETE") {

                const deleteUrl = `${url}/${itemId}`

                const res = await fetch(deleteUrl, config)

                json = await res.json()

            };
                
            setCallFetch(json);
        };

        httpRequest();
    }, [config, itemId, method, url]);

    return { data, httpConfig, loading, error };
};
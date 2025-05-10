import React from 'react';
import { useState, useEffect } from "react";

function Home() {
    const texto = "Venha estudar na FATEC";
    const [index, setIndex] = useState(0);
    const [exibido, setExibido] = useState("");

    useEffect(() => {
        let timeout;

        if (index < texto.length) {
            // Continua digitando caracteres
            timeout = setTimeout(() => {
                setExibido((prev) => prev + texto[index]);
                setIndex((prev) => prev + 1);
            }, 100);
        } else if (index === texto.length) {
            // Reinicia após 1.5s quando a string está completa
            timeout = setTimeout(() => {
                setIndex(0);
                setExibido("");
            }, 1500);
        }

        return () => clearTimeout(timeout);
    }, [index]);

    return (
        <div>
            <h1 className="text-primary">Atividade 1</h1>
            <p className="text-lg font-mono">{exibido}|</p>
        </div>
    );
}

export default Home;
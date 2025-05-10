import React from 'react';

function About() {
    const currentDate = new Date();

    return (
        <div>
            <h1 className="text-success">Atividade 2</h1>
            <p>Data e hora atual : {currentDate.toString()}</p>
        </div>
    );
}

export default About;

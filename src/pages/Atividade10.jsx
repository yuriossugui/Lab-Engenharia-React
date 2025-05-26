import React from 'react';
import Galeria from '../components/Galeria';
import styles from './Atividade10.module.css';

function Atividade10(){
    return (
        <>
            <div className={`d-flex justify-content-center align-items-center ${styles.card} p-2 flex-column`}>
                <div className="d-flex flex-column justify-content-center">
                    <h5>Exemplo 1</h5>
                    <h6>Galeria</h6>
                </div>
                <div className="d-flex flex-row">
                    <div className="col mx-2">
                        <Galeria/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Atividade10;
import React from 'react';
import Profile from '../components/Profile';
import styles from './Atividade10.module.css';

function Atividade10(){
    return (
        <div className={`d-flex justify-content-center align-items-center ${styles.card} p-2 flex-column`}>
            <div className="d-flex flex-column justify-content-center">
                <h5>Exemplo 1</h5>
                <h6>Pessoas</h6>
            </div>
            <div className="d-flex flex-row">
                <div className="col mx-2">
                    <Profile/>
                </div>
                <div className="col mx-2">
                    <Profile/>
                </div>
                <div className="col mx-2">
                    <Profile/>
                </div>
            </div>
        </div>
    );
}

export default Atividade10;
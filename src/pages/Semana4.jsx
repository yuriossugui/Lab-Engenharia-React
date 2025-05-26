import React from 'react';
import FormQuiz from '../components/FormQuiz';
import FormTicket from '../components/FormTicket';
import Accordion from '../components/Accordion';
import Mensagens from '../components/Mensagens';

function Semana4(){
    
    return (
        <>
            <div className="row mb-2">

                <div className="col">
                    <div className="card p-2">
                        <div className="d-flex justify-content-center mb-2">
                            <h3>Form Quiz</h3>
                        </div>
                        <FormQuiz></FormQuiz>
                    </div>
                </div>

                <div className="col">
                    <div className="card p-2">
                        <div className="d-flex justify-content-center mb-2">
                            <h3>Form Ticket</h3>
                        </div>
                        <FormTicket></FormTicket>
                    </div>
                </div>
            </div>

            <div className="row">
                
                <div className="col">
                    <div className="card p-2">
                        <div className="d-flex justify-content-center mb-2">
                            <h3>Accordion</h3>
                        </div>
                        <Accordion></Accordion>
                    </div>
                </div>

                <div className="col">
                    <div className="card p-2">
                        <div className="d-flex justify-content-center mb-2">
                            <h3>Contact List e Chat</h3>
                        </div>
                        <Mensagens></Mensagens>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Semana4;
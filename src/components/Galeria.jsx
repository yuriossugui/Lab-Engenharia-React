import React from 'react';
import Profile from '../components/Profile';

function Galeria(){
    return (
        <>
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
        </>
    );
}

export default Galeria;
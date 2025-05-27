import React, { useState } from 'react';

function PopulationCounter() {
  const [men, setMen] = useState(32);
  const [women, setWomen] = useState(49);

  const total = men + women;

  const handleMenChange = (change) => {
    if (men + change >= 0) setMen(men + change);
  };

  const handleWomenChange = (change) => {
    if (women + change >= 0) setWomen(women + change);
  };

  return (
    <div className="container mt-4 p-4 border rounded shadow-sm bg-white" style={{ maxWidth: '400px' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Total</h3>
        <button className="btn btn-outline-secondary" onClick={() => {}}>
          <i className="bi bi-arrow-clockwise"></i>
        </button>
      </div>

      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control form-control-lg text-center"
          value={total}
          readOnly
          aria-label="Total"
        />
      </div>

      {/* Homens */}
      <div className="card mb-3">
        <div className="card-body d-flex align-items-center">
          <i className="bi bi-gender-male display-5 text-primary me-3"></i>
          <div className="flex-grow-1">
            <div className="d-flex justify-content-between mb-2">
              <span>Homens</span>
              <div>
                <button className="btn btn-success btn-sm mx-1" onClick={() => handleMenChange(1)}>
                  +
                </button>
                <button className="btn btn-danger btn-sm mx-1" onClick={() => handleMenChange(-1)}>
                  -
                </button>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-center"
              value={men}
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Mulheres */}
      <div className="card">
        <div className="card-body d-flex align-items-center">
          <i className="bi bi-gender-female display-5 text-danger me-3"></i>
          <div className="flex-grow-1">
            <div className="d-flex justify-content-between mb-2">
              <span>Mulheres</span>
              <div>
                <button className="btn btn-success btn-sm mx-1" onClick={() => handleWomenChange(1)}>
                  +
                </button>
                <button className="btn btn-danger btn-sm mx-1" onClick={() => handleWomenChange(-1)}>
                  -
                </button>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-center"
              value={women}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopulationCounter;
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons @1.10.5/font/bootstrap-icons.css"></link>

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
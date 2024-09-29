import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

// Crie a raiz do React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderize o componente Calculator
root.render(
<div>
  <h1>Calculadora</h1>
<Calculator />
</div>
)

reportWebVitals();


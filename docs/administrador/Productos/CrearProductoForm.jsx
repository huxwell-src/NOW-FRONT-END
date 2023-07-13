import React, { useState } from 'react';
import "./crud.css"

const CrearProductoForm = () => {
  const [nombre, setNombre] = useState('');
  const [stock, setStock] = useState('');
  const [medidaStock, setMedidaStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica para enviar los datos del formulario al backend

    // Reiniciar los campos del formulario
    setNombre('');
    setStock('');
    setMedidaStock('');
  };

  return (
    <form className="crear-producto-form" onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="input-field"
      />

      <label htmlFor="stock">Stock:</label>
      <input
        type="number"
        id="stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        className="input-field"
      />

      <label htmlFor="medidaStock">Medida de Stock:</label>
      <input
        type="text"
        id="medidaStock"
        value={medidaStock}
        onChange={(e) => setMedidaStock(e.target.value)}
        className="input-field"
      />

      <button type="submit" className="submit-button">Crear Producto</button>
    </form>
  );
};

export default CrearProductoForm;

import React from 'react';

function Tutorial() {
  return (
    <div className="tutorial">
      <h2>Explicación del Prototipo</h2>
      <p>
        Este dashboard muestra Un recuento de las estructuras de las tablas.
      </p>
      
      <h3>Diccionario de Datos</h3>
      <p>
        El Diccionario de Datos te permite crear y gestionar la estructura de las tablas en la base de datos. 
        Aquí puedes definir:
      </p>
      <ul>
        <li><strong>Nombre de la Tabla:</strong> El nombre que identificarás la tabla en tu base de datos.</li>
        <li><strong>Descripción:</strong> Una breve descripción que explica el propósito de la tabla.</li>
        <li><strong>Columnas:</strong> Especifica las columnas de la tabla, junto con sus tipos de datos y restricciones. 
            Puedes definir tipos como VARCHAR, INT, y más, así como restricciones como PRIMARY KEY, NOT NULL, etc.</li>
      </ul>

      <h3>Conclusión</h3>
      <p>
        Este prototipo te ofrece una interfaz amigable para gestionar tu base de datos de manera efectiva. 
        Explora todas las funcionalidades y empieza a crear, modificar y manipular tus datos con facilidad.
      </p>
    </div>
  );
}

export default Tutorial;


import React from "react";
import "../estilos/opiniones.css";
import datos from "../datos/Opiniones.js";
export const Opiniones = () => {
  return (
    <div className="contenedorOpiniones">
      <h1>Ve las opiniones de nuestros clientes </h1>
      {datos.map((datos) => (
        <div key={datos.id}>
          <br />
          <a
            href={datos.link}
            rel={"noreferrer"}
            target={"_blank"}
          >
            <button data-text="Awesome" class="button">
              <span class="actual-text">&nbsp;{datos.nombre}&nbsp;</span>
              <span class="hover-text" aria-hidden="true">
                &nbsp;{datos.nombre}&nbsp;
              </span>
            </button>
          </a>
          <p></p>
          <br />
        </div>
      ))}
      {/*
     
 */}
    </div>
  );
};

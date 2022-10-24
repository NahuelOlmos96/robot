import React from "react";
import "../estilos/opiniones.css";
export const Opiniones = () => {
  return (
    <div>
      <h1>Ve las opiniones de nuestros clientes </h1>

      <br />
      <a href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODk2OTQxNzE2MzUxNzMy?story_media_id=2718118314187736563_21934120250&igshid=MDJmNzVkMjY=" rel={"noreferrer"} target={"_blank"} >
        <button data-text="Awesome" class="button">
          <span class="actual-text">&nbsp;opiniones1&nbsp;</span>
          <span class="hover-text" aria-hidden="true">
            &nbsp;opiniones1&nbsp;
          </span>
        </button>
      </a>
      <p></p>
      <br />
      <a href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODk4MzAxNTU2NjYwODk3?story_media_id=2915598665046897950_21934120250&igshid=MDJmNzVkMjY="  rel={"noreferrer"} target={"_blank"}>
        <button data-text="Awesome" class="button">
          <span class="actual-text">&nbsp;opiniones2&nbsp;</span>
          <span class="hover-text" aria-hidden="true">
            &nbsp;opiniones2&nbsp;
          </span>
        </button>
      </a>
    </div>
  );
};

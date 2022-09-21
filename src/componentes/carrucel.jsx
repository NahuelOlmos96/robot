import React from "react";

export const Carrucel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://i.ibb.co/9ZTXc3N/robot8.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://i.ibb.co/Lh59qZR/robot10.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://i.ibb.co/TR4Th0b/DSC04386.jpg"class="d-block w-100" alt="..." />
          </div><div class="carousel-item">
            <img src="https://i.ibb.co/r26yQGf/robot1.jpg" class="d-block w-100" alt="..." />
          </div><div class="carousel-item">
            <img src="https://i.ibb.co/qFM1xP3/fondo.jpg" class="d-block w-100" alt="..." />
          </div><div class="carousel-item">
            <img src="https://i.ibb.co/PCpybjn/robot3.jpg" class="d-block w-100" alt="..." />
          </div><div class="carousel-item">
            <img src="https://i.ibb.co/Hx7kN49/robot2.jpg" class="d-block w-100" alt="..." />
          </div><div class="carousel-item">
            <img src="https://i.ibb.co/ZMJMhSn/robot4.jpg" class="d-block w-100" alt="..." />
          </div><div class="carousel-item">
            <img src="https://i.ibb.co/GTrSL4b/robot5.jpg" class="d-block w-100" alt="..." />
          </div><div class="carousel-item">
            <img src="https://i.ibb.co/g9WTR73/robot6.jpg" class="d-block w-100" alt="..." />
          </div><div class="carousel-item">
            <img src="https://i.ibb.co/WK2QVKp/robot7.jpg" class="d-block w-100" alt="..." />
          </div>
          
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

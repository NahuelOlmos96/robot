import React from "react";

export const CarrucelVideos = () => {
  return (
    <div>
      <div id="carouselvideos" class="carousel slide container" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <iframe
              width="100%"
              height="380"
              src="https://www.youtube.com/embed/CZS23OrUigA?loop=1&playlist=CZS23OrUigA&autoplay=1&mute=1&controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="carousel-item">
            <iframe
              width="100%"
              height="380"
              src="https://www.youtube.com/embed/MJWy2RHBxoo?loop=1&playlist=MJWy2RHBxoo&autoplay=1&mute=1&controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="carousel-item">
            <iframe
              width="100%"
              height="380"
              src="https://www.youtube.com/embed/opFMg5l7ugE?loop=1&playlist=opFMg5l7ugE&autoplay=1&mute=1&controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="carousel-item">
            <iframe
              width="100%"
              height="380"
              src="https://www.youtube.com/embed/Ha0PGekBbFA?loop=1&playlist=Ha0PGekBbFA&autoplay=1&mute=1&controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="carousel-item">
            <iframe
              width="100%"
              height="380"
              src="https://www.youtube.com/embed/FB2fJHQt1wQ?loop=1&playlist=FB2fJHQt1wQ&autoplay=1&mute=1&controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselvideos"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselvideos"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

import { buscarLineas } from "./extraerImagenes";

const handleClick = () => {
  const lineasImg = buscarLineas();

  if (lineasImg) {
    console.log("Urls encontradas:", lineasImg);

    pintarUrl(lineasImg);
  } else {
    console.log("No se encontraron Urls.");
  }
};

const pintarUrl = (Urls: string[]) => {
  const contenedor = document.getElementById("contenedor");
  if (contenedor && contenedor instanceof HTMLDivElement) {
    contenedor.innerHTML = "";

    Urls.forEach((url) => {
      const imgUrl = document.createElement("img");
      imgUrl.src = url;
      imgUrl.alt = "Imagen";
      contenedor.appendChild(imgUrl);
    });
  }
};

const boton = document.querySelector("#boton");
if (boton && boton instanceof HTMLButtonElement) {
  boton.addEventListener("click", handleClick);
}

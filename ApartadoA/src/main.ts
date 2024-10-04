import { pintarDatos } from "./validacionIBAN";

const handleIban = () => {
  const IBAN = obtenerIBAN();
  pintarDatos(IBAN);
};

const obtenerIBAN = (): string => {
  const elementoCampo = document.getElementById(`IBAN`);

  if (elementoCampo && elementoCampo instanceof HTMLInputElement) {
    return elementoCampo.value;
  } else {
    throw new Error(`No se ha encontrado el campo IBAN`);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("boton");
  if (boton && boton instanceof HTMLButtonElement) {
    boton.addEventListener("click", handleIban);
  }
});

export const buscarLineas = (): string[] | null => {
  const textoArea = document.getElementById("textarea");

  if (textoArea && textoArea instanceof HTMLTextAreaElement) {
    const contenidoTexto = textoArea.value;

    const regex = /https?:\/\/[^\s"']+/gm;

    const match = contenidoTexto.match(regex);

    if (match) {
      return match;
    } else {
      console.log("No se encontraron URLs en el código.");
      return null;
    }
  } else {
    return null;
  }
};

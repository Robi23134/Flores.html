Obtén una referencia al elemento de audio y al botón
var audio = documento.getElementById("miAudio");
var botonReproducir = documento.getElementById("botonReproducir");

Agrega un evento click al botón
botonReproducir.addEventListener("clic", función() {
  if (audio.Pausa) {
    Si el audio está pausado, reproducirlo
    audio.jugar();
    botonReproducir.textContent = "Pausar";
  } más {
    Si el audio está reproduciéndose, páusalo
    audio.pausa();
    botonReproducir.textContent = "Reproducir";
  }
});

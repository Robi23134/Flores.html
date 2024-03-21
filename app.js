let Titulo = documento.título;

ventana.addEventListener('desenfoque', () => {
    Titulo = documento.título;
    documento.title = "Beia Dama";
})

ventana.addEventListener('foco', () => {
    documento.title = Titulo;
})

Sea h1 = documento.getElementById("Título");
let Boton1 = documento.getElementById("B1");
Boton1.addEventListener('click', función() {
    const ContenedorBotones = documento.querySelector(". Desventajas");
    documento.querySelector(". Texto").estilo.display = "bloque";
    ContenedorBotones.estilo.display = "ninguno";
    DibujarFlor(500, 100, 6, 30, 100, 200);
    h1.eliminar();
})

documento.getElementById("B12").addEventListener('click', función() {
    const ContenedorBotones = documento.querySelector(". Desventajas");
    ContenedorBotones.estilo.display = "ninguno";
    documento.querySelector(". Texto").estilo.display = "bloque";
    CrearVarias();
    h1.eliminar();
})

const canvas = documento.getElementById('Flor');
const ctx = lienzo.getContext('2d');

función DibujarPetalo(x, y, RadioX, scala, Rotación, color, pasos) {
    const Numero = scala;

    const AnguloIncrement = (Matemáticas.PI / pasos) * 2;
    CTX.salvar();
    CTX.traducir(x, y);
    CTX.rotate(Rotación);
    CTX.scale(1, Numero);
    CTX.beginPath();
    para (sea i = 0;  i <= pasos;  Yo++) {
        const AnguloActual = i * AnguloIncrement;
        const currentRadius = Matemáticas.sin(AnguloActual) * RadioX;
        const PuntoY = Matemáticas.sin(AnguloActual) * currentRadius;
        const PuntoX = Matemáticas.cos(AnguloActual) * radio de corriente;
        if (i === 0) {
          CTX.moveTo(PuntoX, PuntoY);
        } más {
          CTX.lineTo(PuntoX, PuntoY);
        }
        CTX.strokeStyle = color;
        CTX.fillStyle = color;
        CTX.llenar();
        CTX.Golpe();
      }

      CTX.restaurar();
}

función DibujarFlor(x, y, NumeroPetalos, RadioXPetalo, RadioYPetalo, AltoTrazo) {
    Tallo
    const PasosTallo = 50;
    const AltoTallo = AltoTrazo / PasosTallo;
    let NuevaY = y;

  const DibujarTallo = () => {
    if (NuevaY < y + AltoTrazo) {
      CTX.beginPath();
      CTX.moveTo(x, y);
      CTX.lineTo(x, NuevaY);
      CTX.lineWidth = 3;
      CTX.strokeStyle = 'negro';
      CTX.Golpe();
      NuevaY += AltoTallo;
      setTimeout(DibujarTallo, 100);
    } más {
      Dibuja los pétalos en el tallo
      const Pasos = 50;
      let CuantosPasos = 0;
      función DibujarPetalosTallo() {
        if (CuantosPasos <= Pasos) {
          const PetaloY = y + 250 - RadioYPetalo;
          const PetaloY2 = y + 200 - RadioYPetalo;
          DibujarPetalo(500, PetaloY, 15, 2, 300, 'green', CuantosPasos);
          DibujarPetalo(470, PetaloY2, 15, 2, 300, 'green', CuantosPasos);
          CuantosPasos++;
          setTimeout(DibujarPetalosTallo, 100);
        }
      }
      DibujarPetalosTallo();
    }
  };
  DibujarTallo();

    const AnguloIncrement = (Matemáticas.PI * 2) / NumeroPetalos;

    let contadorPetalos = 0;
    function dibujarSiguientePetalo() {
        if (contadorPetalos <= NumeroPetalos) {
          const Angulo = contadorPetalos * AnguloIncrement;
          DibujarPetalo(x, y, RadioXPetalo, 2, Angulo, 'amarillo', 100);
          contadorPetalos++;
          setTimeout(dibujarSiguientePetalo, 1000); 
        }
        Dibuja el centro de la flor
        CTX.beginPath();
        CTX.arc(x, y, 10, 0, Matemáticas.PI * 2);
        CTX.fillStyle = 'blanco';
        CTX.llenar();
      }
      dibujarSiguientePetalo();
}

función DibujarFlorSinTallo(x, y, NumeroPetalos, RadioXPetalo, RadioYPetalo, AltoTrazo) {
    Dibuja el tallo
    const PasosTallo = 50;
    const AltoTallo = AltoTrazo / PasosTallo;
    let NuevaY = y;

  const DibujarTallo = () => {
    if (NuevaY < y + AltoTrazo) {
      CTX.beginPath();
      CTX.moveTo(x, y);
      CTX.lineTo(x, NuevaY);
      CTX.lineWidth = 3;
      CTX.strokeStyle = 'negro';
      CTX.Golpe();
      NuevaY += AltoTallo;
      setTimeout(DibujarTallo, 100);
    } 
  };
  DibujarTallo();

    const AnguloIncrement = (Matemáticas.PI * 2) / NumeroPetalos;

    Dibuja los pétalos
    let contadorPetalos = 0;
    function dibujarSiguientePetalo() {
        if (contadorPetalos <= NumeroPetalos) {
          const Angulo = contadorPetalos * AnguloIncrement;
          DibujarPetalo(x, y, RadioXPetalo, 2, Angulo, 'amarillo', 100);
          contadorPetalos++;
          setTimeout(dibujarSiguientePetalo, 1000); 
        }
        Dibuja el centro de la flor
        CTX.beginPath();
        CTX.arc(x, y, 10, 0, Matemáticas.PI * 2);
        CTX.fillStyle = 'blanco';
        CTX.llenar();
      }
      dibujarSiguientePetalo();
}

función CrearVarias() {
    const numFlores = 12;

    Espaciamiento y tamaño de cada flor
    const espacioX = lienzo.Ancho / 4;
    const espacioY = lienzo.Altura / 3;
    const TamañoFlor = 130;

    para (sea i = 0;  i <= numFlores;  Yo++) {
        const fila = Matemáticas.piso(i / 4);
        const columna = i % 4;
        const x = espacioX * columna + espacioX / 2;
        const y = espacioY * fila + espacioY / 2;

        DibujarFlorSinTallo(x, y, 8, 30, 80, TamañoFlor);
    }
}

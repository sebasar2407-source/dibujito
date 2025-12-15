const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "imagen.png";

img.onload = () => {

  const maxWidth = 550; // 🔹 AJUSTA ESTE VALOR
  const scale = Math.min(1, maxWidth / img.width);

  canvas.width = img.width * scale;
  canvas.height = img.height * scale;

  let y = 0;
  const velocidad = 1;

  function dibujar() {
    for (let i = 0; i < 500; i++) {
      const x = Math.random() * canvas.width;

      ctx.drawImage(
        img,
        x / scale, y / scale, 2, 1,
        x, y, 2, 1
      );
    }

    y += velocidad;

    if (y < canvas.height) {
      requestAnimationFrame(dibujar);
    }
  }

  dibujar();
};
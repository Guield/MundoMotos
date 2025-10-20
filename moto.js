const moto = document.getElementById("moto");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let motoX = mouseX;
let motoY = mouseY;

// Detecta movimiento del mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animación
function animar() {
  // Movimiento suave (ajusta el 0.1 para hacerlo más rápido o lento)
  motoX += (mouseX - motoX) * 0.1;
  motoY += (mouseY - motoY) * 0.1;

  // Calcula el ángulo hacia el puntero
  const dx = mouseX - motoX;
  const dy = mouseY - motoY;
  const angulo = Math.atan2(dy, dx) * (180 / Math.PI);

  // Aplica posición y rotación
  moto.style.left = `${motoX}px`;
  moto.style.top = `${motoY}px`;
  moto.style.transform = `translate(-50%, -50%) rotate(${angulo}deg)`;

  requestAnimationFrame(animar);
}

animar();


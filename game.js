const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const posLabel = document.getElementById("pos");

// CARREGA SUA IMAGEM
const img = new Image();
img.src = "natal snoopy.jpg"; // nome do arquivo que você baixou

const player = {
  x: 30,
  y: 30,
  width: 100,
  height: 100,
  speed: 4
};

const keys = {
  up: false,
  down: false,
  left: false,
  right: false
};

window.addEventListener("keydown", (e) => {
  const k = e.key.toLowerCase();
  if (k === "arrowup" || k === "w") keys.up = true;
  if (k === "arrowdown" || k === "s") keys.down = true;
  if (k === "arrowleft" || k === "a") keys.left = true;
  if (k === "arrowright" || k === "d") keys.right = true;
});

window.addEventListener("keyup", (e) => {
  const k = e.key.toLowerCase();
  if (k === "arrowup" || k === "w") keys.up = false;
  if (k === "arrowdown" || k === "s") keys.down = false;
  if (k === "arrowleft" || k === "a") keys.left = false;
  if (k === "arrowright" || k === "d") keys.right = false;
});

function update() {
  if (keys.up) player.y -= player.speed;
  if (keys.down) player.y += player.speed;
  if (keys.left) player.x -= player.speed;
  if (keys.right) player.x += player.speed;

  // limitadores para não sair da tela
  if (player.x < 0) player.x = 0;
  if (player.y < 0) player.y = 0;
  if (player.x + player.width > canvas.width)
    player.x = canvas.width - player.width;
  if (player.y + player.height > canvas.height)
    player.y = canvas.height - player.height;

  posLabel.textContent = `x=${player.x} | y=${player.y}`;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, player.x, player.y, player.width, player.height);
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

img.onload = () => loop(); // começa o jogo quando a imagem carregar

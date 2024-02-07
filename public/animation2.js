const canvas = document.getElementById("canvas-6066");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "red";
ctx.fillRect(0, 0, canvas.width, canvas.height);
//Image
// var image = new Image();

let particlesArray;

class Particle {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    var fill = Math.round(Math.random()*10)
    if (fill === 0) {
      ctx.lineWidth = this.size / 4;
      ctx.strokeStyle = "#fff";
      ctx.stroke();
    } else if(fill===1){
      ctx.fillStyle = "#fff";
      ctx.fill();
    }
    else if(fill===2){
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.fill()
    }
    else if(fill===4){
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.fill()
    }
  }

  update() {
    this.draw();
  }
}

function init() {
  particlesArray = [];
  let numberOfParticles = 1;
  let size = 11
  let pSize = 2*size
  let nopx = canvas.width / pSize;
  let nopy = canvas.height / pSize;
  numberOfParticles = nopx * nopy
  for(let i = 0; i < nopx; i++){
    for(let j = 0; j < nopy; j++){
        let x = i*pSize, y = j*pSize;
        let color = "#beb5ff";
        particlesArray.push(
            new Particle(x, y, size, color)
        );
    }
  }
}

function animate() {
  setTimeout(()=>{
    requestAnimationFrame(animate);
  }, 88);
   // this is the recursive call that updates after performing the operation
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
}

window.addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

init();
animate();

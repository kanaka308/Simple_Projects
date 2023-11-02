const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
console.log(ctx)

let hue = 0;

canvas.width = window.innerWidth;
canvas.height = this.window.innerHeight;

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = this.window.innerHeight;
})

let ParticleArray = [];

const mouse = {
  x: null,
  y: null
}

class Particle{
  constructor(){
    this.x = mouse.x;
    this.y = mouse.y;
    // this.x = Math.random()*canvas.width;
    // this.y = Math.random()*canvas.height;
    this.size = Math.random()*15 + 1;
    this.speedX = Math.random()*3 - 1.5;
    this.speedY = Math.random()*3 - 1.5;
    this.color = `hsl(${hue}, 100%, 50%)`
  }
  
  drawParticle(){
 
    // ctx.fillStyle = 'white';
    ctx.fillStyle = this.color;
    ctx.beginPath()
    ctx.arc(this.x,this.y, this.size, 0, Math.PI*2);

    // ctx.arc(mouse.x, mouse.y, Math.random()*20, 0, Math.PI*2);
    ctx.fill()
  }

  updateParticle(){
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.size > 0.2) this.size -= 0.1;
  }
}


canvas.addEventListener('click', function(e){
  mouse.x = e.x;
  mouse.y = e.y;
  ParticleArray.push(new Particle());
})

canvas.addEventListener('mousemove', function(e){
  mouse.x = e.x;
  mouse.y = e.y;

  for(let i = 0; i<2; i++){
    ParticleArray.push(new Particle());
  }
  
  
})

// function init(){
//   for (let i=0; i<100; i++){
//     ParticleArray.push(new Particle)
//   }
// }
// init();

function handleParticles(){
  for(let i = 0; i<ParticleArray.length; i++){
    ParticleArray[i].updateParticle()
    ParticleArray[i].drawParticle()
    
  }
}

function animate(){
  ctx.fillStyle = 'rgba(0,0,0,0.02)'
  ctx.clearRect(0,0, canvas.width, canvas.height)
  // ctx.fillRect(0,0, canvas.width, canvas.height)
  handleParticles();
  hue+=5;
  requestAnimationFrame(animate)
  
}

animate()










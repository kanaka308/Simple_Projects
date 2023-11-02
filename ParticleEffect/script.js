const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
console.log(ctx)

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
    // this.x = mouse.x;
    // this.y = mouse.y;
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.size = Math.random()*15 + 1;
    this.speedX = Math.random()*3 - 1.5;
    this.speedY = Math.random()*3 - 1.5;
  }
  
  drawParticle(){
 
    ctx.fillStyle = 'blue';
    ctx.beginPath()
    ctx.arc(this.x,this.y, this.size, 0, Math.PI*2);

    // ctx.arc(mouse.x, mouse.y, Math.random()*20, 0, Math.PI*2);
    ctx.fill()
  }

  updateParticle(){
    this.x += this.speedX;
    this.y += this.speedY;
  }
}


canvas.addEventListener('click', function(e){
  mouse.x = e.x;
  mouse.y = e.y;
  animate();
})

// canvas.addEventListener('mousemove', function(e){
//   mouse.x = e.x;
//   mouse.y = e.y;
  
//   console.log(new Particle())
//   init()
//   handleParticles()
//   animate()
// })

//   // for(let i = 0; i<100; i++){
//   //   ParticleArray.push(new Particle)
//   //   ParticleArray[i].drawParticle()
//   //   ParticleArray[i].updateParticle()
//   // }
// })

function init(){
  for (let i=0; i<100; i++){
    ParticleArray.push(new Particle)
  }
}
init();

function handleParticles(){
  for(let i = 0; i<ParticleArray.length; i++){
    ParticleArray[i].updateParticle()
    ParticleArray[i].drawParticle()
    
  }
}

function animate(){
  ctx.clearRect(0,0, canvas.width, canvas.height)
  handleParticles();
  requestAnimationFrame(animate)
}

animate()










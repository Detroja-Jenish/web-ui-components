class Particle{
            
    constructor(particle, container){
        this.xlimit = container.offsetWidth
        this.ylimit = container.offsetHeight
        this.particle = particle;
        this.x = Math.random()*this.xlimit
        this.y = Math.random()*this.ylimit
        this.up = (Math.random(0,1) > 0.5)? 1 : -1 
        this.left = (Math.random(0,1) > 0.5)? 1 : -1 
        this.xa = Math.random()*3
        this.ya = Math.random()*3
        this.particle.style.animationDuration =`${Math.random()*4 + 2}s`
        this.particle.style.scale = `${Math.random()*1.5}`
        setInterval(()=>{this.move()},100)
    }
    reset(){
        this.particle.style.scale = `${Math.random()*1.5}`
        this.xa = Math.random()*3
        this.ya = Math.random()*3
        this.particle.style.scale = `${Math.random()*1.5}`
        this.particle.style.animationDuration =`${Math.random()*4 + 2}s`
    }
    move(){
        if(this.x < 10 || this.x > this.xlimit){
            this.left = -1*this.left
            this.reset()
        }else if ( this.y < 10 || this.y > this.ylimit){
            this.up = -1*this.up
            this.reset()
        }
        this.y += this.up*this.ya
        this.x += this.left*this.xa
        this.particle.style.top = `${this.y}px`
        this.particle.style.left = `${this.x}px`
    }
}


const msg = document.getElementById('msg')
const placeholder = document.getElementById('placeholder')
const real = document.getElementById('real')
let flag=true

for(const child of msg.children){
    // console.log(child);
    // child.addEventListener('mousemove',(e)=>{e.stopPropagation()})
    child.addEventListener('mouseenter',(e)=>{e.stopPropagation()})
    child.addEventListener('mouseout',(e)=>{e.stopPropagation()})
}
msg.onmouseover = (e) => {
    real.style.transitionDuration = '0.1s'
    placeholder.style.transitionDuration = '0.1s'
    real.style.setProperty('--cursor-rotate-deg', `${(Math.random()>0.5)? '':'-'}${Math.random()*(15-5+1)+5}deg`);
    real.style.setProperty('--cursor-display','block')
}
msg.onmousemove = (e) => {
    const msg_boudries = msg.getBoundingClientRect()
    const x = e.clientX - msg_boudries.left
    const remove_char_percentage = (x * 100)/msg.offsetWidth
    // msg.style.setProperty('--remove-char-percentage',`${remove_char_percentage}%`)
    msg.style.setProperty('--remove-char-percentage',`-${remove_char_percentage}%`)
    real.style.width = `${x}px`
}
msg.onmouseout = (e) => {
    
    real.style.setProperty('--cursor-display','none')
    real.style.transitionDuration = '0.5s'
    placeholder.style.transitionDuration = '0.5s'
    real.style.width = '0px'
    msg.style.setProperty('--remove-char-percentage',`0%`)
}

const particles = document.getElementsByClassName('particle')
for(let particle of particles){
    const particle_obj = new Particle(particle,msg)
    // setInterval(particle_obj.move,500)
}


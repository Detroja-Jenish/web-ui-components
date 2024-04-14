const card_glowing_star = document.getElementsByClassName('card-glowing-star')[0]
const star_rows = document.getElementsByClassName('star-row')
const glowing_star_container = document.getElementsByClassName('glowing-star-container')[0]
let timeouts = []
async function initStarGrid(){
    starHtml = ''
    rows = card_glowing_star.offsetHeight/40
    cols = card_glowing_star.offsetWidth / 40
    for(i=0; i<rows;i++){
        starHtml = await starHtml + `<div class='star-row' style='--transition-delay: ${i*0.2}s'>`
        for(j=0; j<cols;j++){
            starHtml = starHtml + '<span class="star"></span>'
        }
        starHtml = await starHtml + '</div>'
    }
    glowing_star_container.innerHTML = starHtml
}
function starFUn(){
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function glow(local_star){
        const delay = Math.random()*60
        local_star.removeAttribute('style')
        await sleep(100)
        local_star.style.animation = `blink-star 1.5s ease-in-out ${delay}s 2 alternate forwards`
        id = setTimeout(()=>{glow(local_star,id)}, delay*1000 + 3000)
        timeouts.push(id)
    }
    for(let star_row of star_rows){
        const stars = star_row.getElementsByClassName('star')
        for(let star of stars){
            glow(star)
        }
    }
}

async function main(){
    await initStarGrid()
    starFUn()
    card_glowing_star.onmouseenter = () => {
        //console.log(timeouts);
        //console.log("enteres");
        for(let timeout of timeouts){
            clearTimeout(timeout);
        }
        timeouts = []
    }

    card_glowing_star.onmouseleave = () => {
        //console.log('leave');
        starFUn()
    }
}

main()
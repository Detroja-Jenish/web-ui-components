cards = document.getElementsByClassName("card")

class Card{
    
    constructor(card){
        this.card = card
        // //console.log(card);

        this.card.addEventListener('mouseenter', (e)=>{this.rotate_card(e)});
        this.card.addEventListener('mousemove', (e)=>{this.rotate_card(e)});
        this.card.addEventListener('mouseover', (e)=>{this.rotate_card(e)});
        const children = this.card.children;
        for(const child of children){
            child.addEventListener('mouseout', (e) => {
                //console.log(e.target);
                e.stopPropagation(); // Stop event bubbling
                // //console.log(e)
            });
        }
        this.card.addEventListener('mouseout', (e) => {
            if(e.target.getAttribute("class") === "card"){
                //console.log('======',e.target);
                card.removeAttribute('style');
            }else{
                //console.log(e.target);
            }
            
        });
        
    }
    show(){
        //console.log(this.card,this.cardLeft);
    }
    rotate_card(e){
        const maxDegree = 10
        const card_boundries = this.card.getBoundingClientRect()
        const cardLeft = card_boundries.left
        const cardTop = card_boundries.top
        const cardWidth = card_boundries.width
        const cardHeight = card_boundries.height
        // //console.log(e)
        // //console.log(e.target.getElementsByTagName('h1')[0]);
        //console.log(cardLeft);
        let deg_x = 0
        let deg_y = 0
    
        if(e.clientX - cardLeft <= cardWidth / 2){
            deg_x =  ((e.clientX - cardLeft)*maxDegree)/(cardWidth / 2);
            deg_x = maxDegree-deg_x
            deg_x = -1*deg_x
        }else{
            deg_x =  ((e.clientX - cardLeft - (cardWidth / 2) )*maxDegree)/(cardWidth / 2);
        }
    
        if(e.clientY - cardTop <= cardHeight / 2){
            deg_y =  ((e.clientY - cardTop)*maxDegree)/(cardHeight / 2);
            deg_y = maxDegree-deg_y
            deg_y = -1*deg_y
        }else{
            deg_y =  ((e.clientY - cardTop - (cardHeight / 2) )*maxDegree)/(cardHeight / 2);
        }
        // //console.log(this.card.getElementsByTagName('h1')[0],`rotateY(${deg_x}deg) rotateX(${deg_y}deg)`);
        this.card.style.transform = `rotateY(${deg_x}deg) rotateX(${deg_y}deg)`
    }
}

function main_3d_card(card_original){

    
    
    
    
}
mappedCards = []
for(card of cards){
    mappedCards.push(new Card(card))
}
//console.log(cards);

for(let a of mappedCards){
    a.show()
}
const card_mtx = document.getElementById('card-mtx')
card_mtx.style.setProperty('--circle-radius', `${card_mtx.offsetWidth*0.67}px`)
card_mtx.onmousemove = (e) => {
  rect = card_mtx.getBoundingClientRect()
  //console.log(e.clientX,e.clientY);
  //console.log(e.clientX,rect.left,e.clientX-rect.left)
  const x = e.clientX-rect.left
  const y = e.clientY-rect.top
  var per = 10
  if(x>y){
    x_helper = (rect.width - x) % (rect.width/2) 
    per = (x_helper*100)/(rect.width/2) 

  }else{
    y_helper = (rect.height - y) % (rect.height/2) 
    per = (y_helper*100)/(rect.height/2) 

  }
  per = (per > 90) ? 90 : per
  card_mtx.style.setProperty('--mouse-x',`${x}px`)
  card_mtx.style.setProperty('--mouse-y',`${y}px`)
  card_mtx.style.setProperty('--transparent-percentage',`${per}%`)
  data = ''
  for(i=0;i<28;i++){
    data += generateRandomText(60) + '\n'
  }
  card_mtx.setAttribute('data-bg',data)
}

function generateRandomText(length) {
  const characters = 'કખગઘઙચછજઝઞટઠડઢણતથદધનપફબભમયરલવશષસહળ઼ાિીુૂૃૄૅ';
  
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

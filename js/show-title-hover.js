function show_title(element){
    element.innerHTML += `<span id="title" style="position: absolute;color: red; font-size: 40px; z-index:9999; trasition-duration: 0.4s">${element.getAttribute('title')}</span>`
    // const child= element.getElementById('title')//; 
    const child = element.lastChild
    console.log(child);
    element.addEventListener('mousemove',(e)=>{
        e.stopPropagation()
        // element.innerHTML += `<span id='title' style='position: absolute;>${element.getAttribute('title')}</span>`
        const left = e.clientX- element.getBoundingClientRect().left
        const top = e.clientY- element.getBoundingClientRect().left
        child.style.scale = '1'
        element.style.position = 'relative'
        console.log(element);
        console.log(child)
        child.style.top= `${top}px`
        child.style.left = `${left}px`
        console.log(element.getAttribute('title'));
    })

    element.addEventListener('mouseout', ()=>{
        child.style.scale = '0'
    },false)
}

const elements_title_hover = document.getElementsByClassName('title-hover')
setTimeout(async ()=>{
    for(const element of elements_title_hover){
        // console.log(element);
        show_title(element)
    }
},1000)

// setTimeout(()=>{alert('gooô')},1000)
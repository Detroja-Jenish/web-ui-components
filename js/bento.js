const grid = document.getElementsByClassName('grid')[0]
        grid.style.gridTemplateColumns = `repeat(${grid.getAttribute('grid-cols')},1fr)`
        const box_wrappers = document.getElementsByClassName("box-wrapper")
        const box_chaser = document.getElementsByClassName('box-chaser')[0]
        const boxs = document.getElementsByClassName('box')
        for(let box_wrapper of box_wrappers){
            //console.log(`${box_wrapper.getAttribute('col')} / span ${box_wrapper.getAttribute('colspan')}`);
            box_wrapper.style.gridColumn = `${box_wrapper.getAttribute('col')} / span ${box_wrapper.getAttribute('colspan')}`
            if(box_wrapper.getAttribute('row') != null && box_wrapper.getAttribute('rowspan') !== null){
                box_wrapper.style.gridRow = `${box_wrapper.getAttribute('row') + "/"??""}   ${"span " + box_wrapper.getAttribute('rowspan')??1}`
            }else{
                const child = box_wrapper.children[0]
                //console.log(`------++++++------------ ${box_wrapper.getAttribute('row') + "/"??""}   ${"span " + Math.ceil(child.offsetHeight/100)}`,(child.offsetHeight),Math.ceil(child.offsetHeight/100),child.getBoundingClientRect().height);
                box_wrapper.style.gridRow = `${box_wrapper.getAttribute('row') + "/"??""}   ${"span " + Math.ceil(child.offsetHeight/100)}`
            }
            box_wrapper.onmouseenter = (e)=>{
                let ebox_wrapper = box_wrapper
                
                box_chaser.style.width = `${ebox_wrapper.offsetWidth - 20}px`
                box_chaser.style.height = `${ebox_wrapper.offsetHeight - 20}px`
                box_chaser.style.top = `${ebox_wrapper.offsetTop + 10}px`
                box_chaser.style.left = `${ebox_wrapper.offsetLeft + 10}px`
                box_chaser.style.backgroundColor = randomColor()
            }
        }

        for(let box of boxs){
            let color = `linear-gradient(${Math.random()*360}deg,${randomColor()},${randomColor()})`
            //console.log(color);
            box.style.background = color
        }
        function randomColor(){
            hexs = ["0","1","2","3","4",'5',"6","7","8","9","a","b","c","d","e","f","0","1","2","3","4",'5',"6","7","8","9","a","b","c","d","e","f","0","1","2","3","4",'5',"6","7","8","9","a","b","c","d","e","f","0","1","2","3","4",'5',"6","7","8","9","a","b","c","d","e","f","0","1","2","3","4",'5',"6","7","8","9","a","b","c","d","e","f","0","1","2","3","4",'5',"6","7","8","9","a","b","c","d","e","f","0","1","2","3","4",'5',"6","7","8","9","a","b","c","d","e","f","0","1","2","3","4",'5',"6","7","8","9","a","b","c","d","e","f","0","1","2","3","4",'5',"6","7","8","9","a","b","c","d","e","f","0","1","2","3","4",'5',"6","7","8","9","a","b","c","d","e","f","0","1","2","3","4",'5',"6","7","8","9","a","b","c","d","e","f","0","1","2","3","4",'5',"6","7","8","9","a","b","c","d","e","f","0","1","2","3","4",'5',"6","7","8","9","a","b","c","d","e","f","0","1","2","3","4",'5',"6","7","8","9","a","b","c","d","e","f","0","1","2","3","4",'5',"6","7","8","9","a","b","c","d","e","f","0","1","2","3","4",'5',"6","7","8","9","a","b","c","d","e","f","0","1","2","3","4",'5',"6","7","8","9","a","b","c","d","e","f","0","1","2","3","4",'5',"6","7","8","9","a","b","c","d","e","f"]
            rColor = "#";
            for(i = 0; i<6; i++){
                rColor += hexs[ Math.ceil(Math.random()*270)];
            }
            //console.log(rColor)
            return rColor;
        }
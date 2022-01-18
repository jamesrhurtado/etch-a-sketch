const container = document.querySelector('.container')

function makeGrid(size){
    for(let i=0; i<size * size;i++){
        const box = document.createElement('div')
        box.classList.add('box')
        container.appendChild(box)
    }
}

makeGrid(26)

const boxes = document.querySelectorAll('.box')

boxes.forEach(box => box.addEventListener('mouseover', ()=> {
    box.classList.add('painted-box')
}))


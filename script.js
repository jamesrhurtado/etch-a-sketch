const container = document.querySelector('.container')

function makeGrid(size){
    for(let i=0; i<size * size;i++){
        const newBox = document.createElement('div')
        newBox.classList.add('box')
        container.appendChild(newBox)
    }
}
//default
makeGrid(16)

const boxes = document.querySelectorAll('.box')
const buttonClear = document.querySelector('.clear')
const buttonInput = document.querySelector('.input')

//clear button
buttonClear.addEventListener('click', ()=>{
    //dom was cleared, unable to use boxes
    //(possible bug)
    document.querySelectorAll('.box').forEach(box => box.classList.remove('painted-box'))
})

//for each box, we listen
//NOT box.addEventListener()
boxes.forEach(box => addEventListener('mouseover', paintBox))

function paintBox(e){
    //console.log(e.target)
    if(e.target.classList.contains('box')){
        e.target.classList.add('painted-box')
    }
}

//input
buttonInput.addEventListener('click', () => {
    const sizeString = prompt('Enter a number: (max. value: 100) ')
    const size = Number.parseInt(sizeString)
    if((!size) || size > 100){
        alert("Please enter a valid number!")
        return
    }
    //clean the DOM
    //container.innerHTML = ' '
    //this is the same as the above but more efficient
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    makeGrid(size)
})

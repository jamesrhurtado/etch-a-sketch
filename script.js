const container = document.querySelector('.container')

/*
const content = document.createElement('div')
content.textContent = "First div"
content.setAttribute('style', 'background-color: gray')

container.appendChild(content)

*/
function makeGrid(){
    for(let i=0; i<16;i++){
        let row = document.createElement('div');
        row.classList.add('row')
        for(let j=0; j<16; j++){
            var box = document.createElement('div');
            box.classList.add('box')
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}
makeGrid()

const boxes = document.querySelectorAll('.box')

boxes.forEach(box => box.addEventListener('mouseover', ()=> {
    box.classList.add('painted-box')

}))



/*
function onHover(e) {
     //console.log(e.target)   
  }
*/
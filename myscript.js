const container = document.querySelector(".container");
const body = document.querySelector('body');

let tab_width = 16;
let tab_height = tab_width;

draw();

function draw(){
    tab_height = tab_width;
    for(i = 0; i < tab_width; i++){
        const grid_r = document.createElement("div");
        grid_r.classList.add(`${i}`);
        grid_r.style.display= "flex";
        grid_r.style.flexDirection= "row";
        grid_r.style.height = `${(container.clientHeight) / tab_height}` + 'px';
        container.appendChild(grid_r);
        for (j = 0; j < tab_height; j++){            
            const grid_el = document.createElement("div");
            grid_el.classList.add(`${i}-${j}`);
            grid_el.style.width = `${(grid_r.offsetWidth) / tab_width}` + 'px';
            grid_r.appendChild(grid_el);
        }
    }
}

const hover_targ = document.querySelectorAll('.container div div');
hover_targ.forEach((field) => {
    field.addEventListener('mouseover',() =>{
        field.style.backgroundColor = 'black';
    }); 
});


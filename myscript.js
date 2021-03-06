const container = document.querySelector(".container");
const body = document.querySelector('body');

let tab_width = 10;
let tab_height = tab_width;

draw();
hoveraj();

function draw(){
    //proveri za vec postojeci grid, pa ga izbrisi
    let element = document.querySelector(".container");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    //ovaj kod ispod crta novi grid
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
};

function RRGGBB() {
    let mora = '';
    let nizic = [];
    for(let i = 0; i < 3; i++){
        nizic[i] = Math.floor(Math.random() * (255 - 0));
    }
    mora = nizic.toString();
    return "rgb(" + mora + ")";
}

function randRGB(komadic){
    let original = komadic.slice(4,komadic.length-1);
    let karera = original.split(',');
    let mora = '';
    for(let i = 0; i < karera.length; i++){
        karera[i] = Math.floor(karera[i]*0.9);
    }
    mora =  karera.toString();
    return "rgb(" + mora + ")";
}

function hoveraj(){
const hover_targ = document.querySelectorAll('.container div div');
hover_targ.forEach((field) => {
    field.addEventListener('mouseover',(current,previous) =>{
        if(field.style.backgroundColor == ''){
            field.style.backgroundColor = RRGGBB();
        }else{
            previous = field.style['background-color'];
            current = randRGB(previous);
            field.style.backgroundColor = current;
        }
    }); 
});
};

//Zasto ovo ne radi kada nije u funkciji??
//To se odnosi na funkciju hoveraj

const btn = document.querySelector('.rst');
btn.addEventListener('click', ()=>{
    tab_width = prompt("Insert table width");
    if(tab_width > 100){
        tab_width = 100;
    }
    console.log(tab_width);
    draw();
    hoveraj();
});


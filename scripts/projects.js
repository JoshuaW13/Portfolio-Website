function set_grid_item_size(){
    let viewport_size = window.innerWidth;
    let grid = document.querySelector(".projects");
    if(viewport_size<= 550){
        grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))"
    }
    else{
        grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(500px, 1fr))"
    }
}

window.addEventListener("resize",set_grid_item_size);
set_grid_item_size();
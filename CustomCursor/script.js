let container = document.querySelector(".container");
let cursor = document.querySelector(".cursor");

container.addEventListener("mousemove", function(coordinates){
    console.log(coordinates.x)
    cursor.style.left = coordinates.x+"px";
    cursor.style.top = coordinates.y+"px";
})

var elem = document.querySelectorAll(".elem");
console.log(elem);


elem.forEach(function(val){
        val.addEventListener("mouseenter", function(){
            val.childNodes[1].style.opacity = "1";
        })

        val.addEventListener("mouseleave", function(){
        val.childNodes[1].style.opacity = "0";
        })

        val.addEventListener("mousemove", function(pos){
            val.childNodes[1].style.left = pos.x + "px"
            // val.childNodes[1].style.top = pos.y+ "px"

        })
})


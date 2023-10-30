let story = document.querySelectorAll(".stories");
let fullScreen = document.querySelector("#full-screen")

story.forEach(element => {
    element.addEventListener('click', function(){
        console.log(element.childNodes[1].src)
        
        // element.childNodes[1].style.display = 'block'
        fullScreen.style.display = 'block';
        fullScreen.style.backgroundImage = `url(${element.childNodes[1].src})`;

        fullScreen.style.height = '100%';
        console.log(element.childNodes[1]);
        


        setTimeout(function(){
            fullScreen.style.display = 'none';
        },3000)

    })
});